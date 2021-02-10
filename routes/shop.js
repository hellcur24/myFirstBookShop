//const path = require('path');
//const rootDir = require('../utilities/path');
const express = require('express');
//const adminData = require('./admin');
const shopController = require('../controllers/shopController');
const router = express.Router();

router.get('/',shopController.getProducts);
router.get('/products',shopController.getProducts);
router.get('/products/:productId',shopController.getProduct);
router.get('/cart',shopController.getCart);
router.post('/cart',shopController.postCart);
router.get('/checkout');



module.exports = router;