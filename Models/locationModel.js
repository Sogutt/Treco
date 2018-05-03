// JavaScript Document

var mongoose = require('mongoose');

var thisLocale = mongoose.Schema({
	name: String,
	country: String,
	tpi: Number,
	avg_hotel_cost: Number,
	avg_inexp_meal: Number,
	dom_beer: Number,
	imp_beer: Number
});

module.exports = mongoose.model('Locations', thisLocale);

