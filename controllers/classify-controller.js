var express = require('express');

var classify = require('../models/classify.js');

var router = express.Router();

// home route
router.get('/', function(req, res) {
    res.redirect('/home');
});

// teacher routes
router.get('/home/teacher/:userName', function(req, res) {
    // code here
});

router.post('/home/teacher/:userName/createElements', function(req, res) {
    // code here
});

router.post('/home/teacher/:userName/createContent', function(req, res) {
    // code here
});

router.post('/home/teacher/:userName/confirm', function(req, res) {
    // code here
});

router.get('/home/teacher/:userName/portal', function(req, res) {
    // code here
});

module.exports = router;
