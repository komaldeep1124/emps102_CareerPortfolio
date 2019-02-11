let express = require('express');
let router = express.Router();
/* GET contact page. */
router.get('/project', function(req, res, next) {
    res.render('project', { title: 'Project' });
  });
  
  
  module.exports = router;