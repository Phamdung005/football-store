const express = require('express');
const router = require('./routes/healthRoutes');
const app = express();
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

app.use('/api', router);
app.use('/api/product', productRoutes);

app.use('/api/auth', authRoutes);

module.exports = app;