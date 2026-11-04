const express = require('express');
const router = require('./routes/healthRoutes');
const app = express();
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

app.use('/api', router);
app.use('/api/san-pham', productRoutes);

app.use('/api/dang-ky', authRoutes);

module.exports = app;