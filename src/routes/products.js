const express = require('express');
const router = express.Router();

router.get('/products/add', (req, res) => {
    //res.render('');
});

router.get('/products', (req, res) => {
    res.send('Son todos los productos OK');
});

module.exports = router;