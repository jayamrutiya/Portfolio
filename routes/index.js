var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pdf', function(req, res, next) {
  res.render('/Jay_CV.pdf');
});

module.exports = router;
