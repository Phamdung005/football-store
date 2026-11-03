const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, default: '' },
    image: { type: String, default: '' },
    variants: [{
        size: String,
        color: String,
        stock: {type: Number, default: 0, min: 0}
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);