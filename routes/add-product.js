const express = require('express');

const route = express.Router();

const prdController = require('../controllers/product')

route.get('/add-product', prdController.getAddProduct);

route.post('/add-product', prdController.postAddProduct);

module.exports = route;