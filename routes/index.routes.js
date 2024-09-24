var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'expense tracker | homepage '});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'expense tracker | about'});
});
module.exports = router;
