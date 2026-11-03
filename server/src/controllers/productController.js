const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({ isDeleted: false });
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createProduct = async (req, res) => {
    try {
        const { name, price, description, image, variants } = req.body;
        const product = new Product({ name, price, description, image, variants });
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({
            _id: req.params.id,
            isDeleted: false
        });
        if (!product) {
            res.status(404).json("Không tìm thấy sản phẩm");
            return;
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        const options = {
            new: true,
            runValidators: true
        }
        const product = await Product.findOneAndUpdate({
            _id: req.params.id,
            isDeleted: false
        },
            req.body,
            options
        );
        if (!product) {
            res.status(404).json("Không tìm thấy sản phẩm");
            return;
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404).json("Không tìm thấy sản phẩm");
            return;
        }
        product.isDeleted = true;
        await product.save();
        res.status(200).json("Xóa sản phẩm thành công");
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
};