var express = require('express');
var router = express.Router();

/* GET signup page */
router.get('/', function(req, res, next) {
  res.render('signup');
});//spacing important for this to work. signup references signup.pug view file.
	
module.exports = router;
