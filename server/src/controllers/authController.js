const User = require("../models/User");
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            res.status(401).json("Email da ton tai");
            return;
        }
        const user = new User({ name, email, password });
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
        res.status(200).json('Dang nhap thanh cong');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    register,
    login,
}