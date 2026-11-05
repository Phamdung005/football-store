require('dotenv').config();
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            res.status(401).json("Email da ton tai");
            return;
        }
        const user = new User({ name, email, password, role });
        await user.save();
        res.status(201).json("dang ky thanh cong");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(401).json("Email khong ton tai");
            return;
        }
        const isPasswordValidate = await bcrypt.compare(password, user.password);
        if (!isPasswordValidate) {
            res.status(401).json("Sai mat khau/tai khoan");
            return;
        }
        const token = jwt.sign(
            {userId: user._id, role: user.role},
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN}
        )
        res.status(200).json({
            message: 'Dang nhap thanh cong',
            token: token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user
            }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    register,
    login,
}