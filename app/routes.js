

var Cata = require('./models/cata');
var Contractor = require('./models/contractor');


function getCatas(res){
	Cata.find(function(err, catas) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(catas); // return all todos in JSON format
		});
};

function getContractors(res){
	Contractor.find(function(err, contractors) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(contractors); // return all todos in JSON format
		});
};

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/catas', function(req, res) {

		// use mongoose to get all todos in the database
		getCatas(res);
	});


	// get all contractors
	app.get('/api/contractors', function(req, res) {

		// use mongoose to get all contractors in the database
		getContractors(res);
	});





	// create todo and send back all todos after creation
	app.post('/api/catas', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Cata.create({
			cata : req.body.cata,
			cataId:req.body.cataId,
			done : false
		}, function(err, cata) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			getCatas(res);
		});

	});


// create todo and send back all todos after creation
	app.post('/api/contractors', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Contractor.create({
			contractor : req.body.contractor,
			timeSlot:req.body.timeSlot,
			done : false
		}, function(err, contractor) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
		getContractors(res);
		});

	});




	// delete a todo
	app.delete('/api/catas/:cata_id', function(req, res) {
		Cata.remove({
			_id : req.params.cata_id
		}, function(err, cata) {
			if (err)
				res.send(err);

			getCatas(res);
		});
	});

// delete a contractor
	app.delete('/api/contractors/:contractor_id', function(req, res) {
		Contractor.remove({
			_id : req.params.contractor_id
		}, function(err, contractor) {
			if (err)
				res.send(err);

			getContractors(res);
		});
	});






	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};