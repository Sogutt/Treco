var express = require('express')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('home');
});

router.post('/locations', function(req, res, next) {
	res.render('locations');
});


/*router.use(function timelog (req, res, next) {
	console.log('Tima: ', Date.now())
	next()
})
*/

module.exports = router