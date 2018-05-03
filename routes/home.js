var express = require('express')
var router = express.Router();
var dests = new require('../Models/locationModel.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var destList = [{name : 'Addis Ababa', country: 'Ethiopia', tpi: 79, avg_hotel_cost: 45, avg_inexp_meal: 3, dom_beer: 1, imp_beer: 1.4}, {name : 'Alexandria', country: 'Egypt', tpi: 87, avg_hotel_cost: 45, avg_inexp_meal: 2.83, dom_beer: 1.25, imp_beer: 1.7}, {name : 'Shanghai', country: 'China', tpi: 195, avg_hotel_cost: 148, avg_inexp_meal: 4.7, dom_beer: 1.72, imp_beer: 3.91}, {name : 'Stockholm', country: 'Sweden', tpi: 175, avg_hotel_cost: 128, avg_inexp_meal: 12.33, dom_beer: 6.73, imp_beer: 7.5}, {name : 'Madrid', country: 'Spain', tpi: 250, avg_hotel_cost: 177, avg_inexp_meal: 14.33, dom_beer:3.58, imp_beer: 3.82}, {name : 'Boston', country: 'USA', tpi: 288, avg_hotel_cost: 200, avg_inexp_meal: 15, dom_beer:6, imp_beer: 7}, {name : 'Ulaanbaatar', country: 'Mongolia', tpi: 85, avg_hotel_cost: 50, avg_inexp_meal: 2.5, dom_beer:1.75, imp_beer:2}, {name : 'Los Angeles', country: 'USA', tpi: 237, avg_hotel_cost: 150, avg_inexp_meal: 15, dom_beer:6, imp_beer: 9}, {name : 'Goa', country: 'India', tpi: 90, avg_hotel_cost: 65, avg_inexp_meal: 3, dom_beer:.9, imp_beer: 1.5}]
  	var ist = {name : 'Istanbul', country: 'Turkey', tpi: 105, avg_hotel_cost: 65, avg_inexp_meal: 5, dom_beer: 3.5, imp_beer: 3.75};
	//for(i=0; i<destList.length;i++){
	//	var curSave = new dests(destList[i]);
	//	curSave.save();
	//}
	var curSave = new dests(ist);
	curSave.save();
	res.render('home');
});


router.post('/locations', function(req, res, next) {	
	console.log(req.body.Budget);
	response = {
		budget : req.body.Budget,
		days : req.body.Days
	};
	var desiredTPI = response.budget/response.days;
	console.log(response);
	console.log(desiredTPI);
	dests.find({tpi: { $lt: desiredTPI }}, (err,docs)=>{
        console.log(docs);
		res.render('locations', {
            myLocations : docs
        });
    });
});

module.exports = router