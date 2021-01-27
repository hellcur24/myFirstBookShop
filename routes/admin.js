//const path = require('path');
//const rootDirectory = require('../utilities/path');
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

//const products = [];
//mini app pluggable to anther express app



router.get('/add-product', adminController.getAddProduct);
router.get('/products',adminController.getProducts);
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
