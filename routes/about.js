let express = require('express');
let router = express.Router();
/* GET contact page. */
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'about' });
  });
  
  
  module.exports = router;