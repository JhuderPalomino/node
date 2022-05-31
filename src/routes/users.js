const express = require('express');
const router = express.Router();

//user
router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});
router.get('/users/signup', (req, res) => {
    res.render('users/signup');
});
router.get('/users/recovery', (req, res) => {
    res.render('users/recovery');
});

router.get('/prueba', (req, res) => {
    res.render('users/prueba');
});


//pages
router.get('/terms', (req, res) => {
    res.render('pages/terms');
});

module.exports = router;