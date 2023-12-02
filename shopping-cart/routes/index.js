var express = require('express');
var router = express.Router();
var Product = require('../models/product');



/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const docs = await Product.find();
    const productChuck = [];
    const chucksize = 3;
    for (let i = 0; i < docs.length; i += chucksize) {
      productChuck.push(docs.slice(i, i + chucksize));
    }
    res.render('shop/index', { title: 'Online shop', products: productChuck });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
