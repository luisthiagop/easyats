var express = require('express');
var router = express.Router();

var generatePDFController = require("../controllers/generatePDFController");
var getTemplate = require("../controllers/templateController");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({msg: "hello world"}).status(200);
});

router.post('/generatePDF', function(req, res, next) {
  generatePDFController(req, res, next);
});

router.get('/getTemplate', function(req, res, next) {
  getTemplate(req, res, next);
});

module.exports = router;
