const router = require('express').Router();
const profileController = require('../controllers/profileController');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.get('/me', authMiddleware, profileController.getInformationUser);

module.exports = router;