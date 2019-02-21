let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});



/* GET products page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Projects' });
});

/* GET services page. */
router.get('/academic', function(req, res, next) {
  res.render('academic', { title: 'Academics' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});


module.exports = router;