const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const {authorizeRole} = require('../middlewares/authorizeRoles');

router.get('/', productController.getAllProducts);
router.post('/', authMiddleware, authorizeRole('admin'), productController.createProduct);
router.get('/:id', productController.getProductById);
router.patch('/:id', authMiddleware, authorizeRole('admin'), productController.updateProduct);
router.delete('/:id', authMiddleware, authorizeRole('admin'), productController.deleteProduct);

module.exports = router;