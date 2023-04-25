const express = require('express');

const route = express.Router();

const prdController = require('../controllers/product')

route.get('/', prdController.showProducts);

module.exports = route;