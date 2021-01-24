//const path = require('path');
//const rootDirectory = require('../utilities/path');
const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');

//const products = [];
//mini app pluggable to anther express app



router.get('/add-product', productController.getAddProduct);
router.get('/products');
router.post('/add-product', productController.postAddProduct);

module.exports = router;
