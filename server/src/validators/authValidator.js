const { body } = require('express-validator');
const regex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()])/

const registerValidate = [
    body('name').trim().notEmpty().withMessage('Ten khong duoc de trong')
    .isLength({ min: 3 }).withMessage('Ten phai co it nhat 3 ki tu'),
    body('email').notEmpty().withMessage('Email khong duoc bo trong')
    .isEmail().withMessage('Email khong hop le'),
    body('password').notEmpty().withMessage('Mat khau khong duoc bo trong')
    .isLength({ min: 8}).withMessage('Mat khau phai co it nhat 8 ky tu'),
    body('password').matches(regex).withMessage('Mat khau phai co chu hoa, chu thuong, so va ky tu dac biet')
]

module.exports = {
    registerValidate,
}