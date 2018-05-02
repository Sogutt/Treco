// JavaScript Document

var mongoose = require('mongoose');

var thisLocale = mongoose.Schema({
	name: String,
	country: String,
	tpi: Number,
	inexpensive_meal: Number
});

module.exports = mongoose.model('Locations', thisLocale);