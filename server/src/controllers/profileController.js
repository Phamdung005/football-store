const User = require('../models/User')

const getInformationUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId)
        .select("name email role");
        if (!user) {
            res.status(404).json({ message: "Không tìm thấy người dùng" });
            return;
        }
        res.status(200).json({user});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getInformationUser,
}
