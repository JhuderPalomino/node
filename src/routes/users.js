const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});
router.get('/users/signup', (req, res) => {
    res.render('users/signup');
});
router.get('/users/recovery', (req, res) => {
    res.render('users/recovery');
});
module.exports = router;