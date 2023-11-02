var express = require('express');
var router = express.Router();

var generatePDFController = require("../src/http/controllers/generatePDFController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({msg: "hello world"}).status(200);
});

router.post('/generatePDF', function(req, res, next) {
  console.log('chega aqui');
  generatePDFController(req, res, next);
});

module.exports = router;
