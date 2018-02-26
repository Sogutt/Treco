var express = require('express');
var router = express.Router();

/*app.disable('x-powered-by'); Security measure to add in later*/


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Treco' });
});

var request = require("request");
//The GET method should only be used for forms that don't change user data (e.g. a search form).


app.post('/index', function (req, res) {
    res.render('the_template', { name: req.body.name });
});

/*var options = { method: 'GET',
  url: 'https://api.fixer.io/latest',
  headers: 
   { 'Postman-Token': '4d69c967-f410-4f43-8a14-04f43abdfd93',
     'Cache-Control': 'no-cache' } };

console.log(options);
request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
}); */

module.exports = router;
