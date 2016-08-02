var express = require('express');
var path = require('path');
// var classify = require('../models/classify.js');

var router = express.Router();

// home route
router.get('/', function(req, res) {
    res.redirect('/home');
});

router.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, '../joey_test_stuff/login.html'));
})

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
