const express = require('express');

const route = express.Router();

const prdController = require('../controllers/product')

route.use('/', prdController.pageNotFound);

module.exports = route;