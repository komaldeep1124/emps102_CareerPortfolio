let express = require('express');
let router = express.Router();
/* GET contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
  });
  
  
  module.exports = router;