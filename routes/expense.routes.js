var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/create',(req,res)=> {
  res.render("createexpense",{title:"expense tracker | create expense"})
});

router.get('/show',(req,res)=> {
  res.render("showexpense",{title:"expense tracker | show expense"})
});

module.exports = router;
