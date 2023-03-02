const express = require('express');

const indexRoutes = require('./routes/index.routes');
const productRoutes = require('./routes/products.routes');

// initialize server
const app = express();

// config
app.set('port', process.env.PORT || 4000);
app.use(express.urlencoded({ extended: false }));

// routes
app.use(indexRoutes);
app.use(productRoutes);

module.exports = app;
