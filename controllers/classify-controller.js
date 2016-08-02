var express = require('express');

// var classify = require('../models/classify.js');

var router = express.Router();

// var fileUpload = require('express-fileupload');

// home route
router.get('/', function(req, res) {
    res.redirect('/home');
});

router.get('/home', function(req, res) {
    // res.send('Hello World');
    res.render('fileUpload');
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

// expres-fileupload
router.post('/home/teacher/fileUpload', function(req, res) {
    var uploadFile;
    if (!req.files) {
        res.send('No files were uploaded.');
        return;
    }

    uploadFile = req.files.uploadFile;
    uploadFile.mv('~/Desktop/upload-test', function(err) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send('File uploaded successfully!');
        }
    });
})

router.post('/home/teacher/:userName/confirm', function(req, res) {
    // code here
});

router.get('/home/teacher/:userName/portal', function(req, res) {
    // code here
});

module.exports = router;
