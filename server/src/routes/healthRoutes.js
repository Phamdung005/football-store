const router = require('express').Router();

router.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Server is running' });
})

module.exports = router;