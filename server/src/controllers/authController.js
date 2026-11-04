const User = require("../models/User");

const register = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            res.status(409).json("Email da ton tai");
            return; 
        }
        const user = new User({name, email, password});
        await user.save();
        res.status(201).json("dang ky thanh cong");
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
}

module.exports = {
    register,
}