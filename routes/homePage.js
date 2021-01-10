const path = require('path');
const rootDirectory = require('../utilities/path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
});

router.post('/', (req,res)=>{
    res.redirect('/');
});

module.exports = router;