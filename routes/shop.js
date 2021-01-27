//const path = require('path');
//const rootDir = require('../utilities/path');
const express = require('express');
//const adminData = require('./admin');
const shopController = require('../controllers/shopController');
const router = express.Router();

router.get('/',shopController.getProducts);
router.get('/products',shopController.getProducts);
router.get('/products/:productId',shopController.getProduct);
router.get('/cart');
router.get('/checkout');



module.exports = router;