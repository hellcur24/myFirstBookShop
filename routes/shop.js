const path = require('path');
const rootDir = require('../utilities/path');
const express = require('express');
const adminData = require('./admin');
const router = express.Router();

router.get('/', (req, res) =>{

    const products = adminData.products;

    res.render('shop.ejs', {
        productsMain: products,
        pageTitle: 'Main Page',
        path: '/'
    });

    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});



module.exports = router;