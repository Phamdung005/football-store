const express = require('express');
const router = require('./routes/healthRoutes');
const app = express();
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

app.use('/api', router);
app.use('/api/product', productRoutes);

app.use('/api/auth', authRoutes);

app.use('/api/profile', profileRoutes);

module.exports = app;