const express = require('express');
const router = require('./routes/healthRoutes');
const app = express();
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

app.use('/api', router);
app.use('/api/products', productRoutes);

module.exports = app;