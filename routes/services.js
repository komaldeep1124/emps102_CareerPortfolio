let express = require('express');
let router = express.Router();
/* GET contact page. */
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services' });
  });
  
  
  module.exports = router;