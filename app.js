var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var home = require('./routes/home');
var about = require('./routes/about');
var users = require('./routes/users');
//var ist = require('./routes/ist);

var app = express();
var mongo = require('mongodb');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', home);
app.use('/users', users);
app.use('/about', about);
//app.use('/ist', ist);


app.get('/', function(req,res){
	res.render('home');
});


var request = require("request");

app.post('/process', function(req, res){
		var dest = req.body.Dest;
		if(dest == ''){
			response = {
				//Destination1 : req.query.form, searchQuery
				Destination : req.body.Dest,
				Budget : req.body.Budget,
				Days : req.body.Days
			};
		};
		
		console.log(response);
		res.end(JSON.stringify(response)); //renders JSON object in result page
		//how to make the api call?
});

//404 page
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found - You done messed up A-Aron');
});

//500 page
app.use(function(err, req, res, next){
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error - Server done messed up, my bad fam');
});

app.listen(app.get('port'), function(){
	console.log('Treco Express Server started on http://localhost: ' + app.get('port'));
});

module.exports = app;
