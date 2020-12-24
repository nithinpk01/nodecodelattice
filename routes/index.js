var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/aboutus',function(req,res){
    res.render('about')
});
router.get('/contactus',function(req,res){
  res.render('contact')
});
router.get('/services',function(req,res){
  res.render('services')
});
module.exports = router;
