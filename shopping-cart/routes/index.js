var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var app = express();

/* GET product by ID and log to console. */
router.get('/', async function(req, res, next) {
  
  Product.find({})
    .then(product => {
      console.log(product);
    })
    .catch(next)
});

module.exports = router;

