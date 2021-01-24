//const path = require('path');
//const rootDir = require('../utilities/path');
const express = require('express');
//const adminData = require('./admin');
const productController = require('../controllers/products');
const router = express.Router();

router.get('/',productController.getProducts);
router.get('/products');
router.get('/cart');
router.get('/checkout');



module.exports = router;