var express = require('express');
var router = express.Router();
let factor =1;
let product =1;

/* GET users listing. */
router.get('/', function(req, res, next) {
  factor++;
  product*=factor;
  res.send(`product is ${product}`);
});

module.exports = router;
