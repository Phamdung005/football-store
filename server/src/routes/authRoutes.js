const router = require('express').Router();
const authController = require('../controllers/authController');
const { registerValidate, loginValidate } = require('../validators/authValidator');
const { validateMiddleware } = require('../middlewares/validateMiddleware');

router.post('/dang-ky', registerValidate, validateMiddleware, authController.register);
router.post('/dang-nhap', loginValidate, validateMiddleware, authController.login);

module.exports = router;