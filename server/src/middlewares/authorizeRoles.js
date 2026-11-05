const authorizeRole = (role) => {
    return (req, res, next) => {
        const userRole = req.user;
        if (!userRole) {
            res.status(401).json({message: 'Khong xac thuc duoc nguoi dung'});
            return;
        }
        if (userRole.role !== role) {
            res.status(403).json({ message: 'Khong co quyen truy cap' });
            return;
        }
        next();
    }
}

module.exports = {
    authorizeRole,
}