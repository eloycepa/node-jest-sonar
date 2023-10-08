const express = require('express');

const productsRoute = require('./routes/product');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/', productsRoute);

module.exports = app;