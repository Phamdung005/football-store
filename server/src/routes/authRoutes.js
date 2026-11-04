const router = require('express').Router();
const authController = require('../controllers/authController');
const { registerValidate } = require('../validators/authValidator');
const { validateMiddleware } = require('../middlewares/validateMiddleware');

router.post('/', registerValidate, validateMiddleware, authController.register);

module.exports = router;