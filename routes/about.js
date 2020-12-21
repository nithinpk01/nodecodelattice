var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/aboutus', function(req, res, next) {
  res.render('about');
});

module.exports = router;
