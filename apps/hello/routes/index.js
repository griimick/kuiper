var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status (403).send ('fuck off');
});

module.exports = router;
