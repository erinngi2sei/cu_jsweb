var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.method)
  console.log(req.httpVersion)
  res.render('index', { title: 'Express' });
});

module.exports = router;
