const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        res.status(401).json({ message: "authorization khong ton tai" });
        return;
    }
    const array = authorization.split(" ");
    if (array[0] != "Bearer") {
        res.status(401).json({ message: 'token khong hop le' });
        return;
    }
    if (array[1] === undefined) {
        res.status(401).json({ message: 'Khong phat hien token' });
        return;
    }
    if (array.length != 2) {
        res.status(401).json({ message: 'Mang authorization tra ve khong hop le'});
    }
    const token = array[1];

    try {
        const jwtVerify = jwt.verify(token, process.env.JWT_SECRET);
        if (!jwtVerify) {
            res.status(401).json({ message: 'jwt khong hop le' });
            return;
        }
        req.user = jwtVerify;
        next();
    } catch (err) {
        res.status(401).json({ message: 'token da het han/ sai chu ky' })
    }
}

module.exports = {
    authMiddleware,
}