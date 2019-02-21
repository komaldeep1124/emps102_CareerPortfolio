let express = require('express');
let router = express.Router();
/* GET contact page. */
router.get('/academic', function(req, res, next) {
    res.render('academic', { title: 'Academic' });
  });
  
  
  module.exports = router;