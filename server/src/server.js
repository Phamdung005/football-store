require('dotenv').config();

const app = require('./app');
const PORT = 3000;
const connectDB = require('./config/database');

(async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log('Server đang chạy trên http://localhost:' + PORT);
        });
    } catch (error) {
        console.error('Kết nối đến db thất bại: ' + error.message);
        process.exit(1);
    }
})();