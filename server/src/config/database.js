const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Đã kết nối đến db thành công');
    } catch (error) {
        throw new Error('Kết nối đến db thất bại: ' + error.message);
    }
}

module.exports = connectDB;