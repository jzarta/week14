//========================================================================
// Load Data
// Linking the routes to a series of "data" source.
//These data source hold arrays of information on table-data, waitinglist.
//========================================================================

var tableData = require('../data/table-data.js');
var waitListData = require('../data/waitinglist-data.js');
var path = require('path');
//===============
//Routing
//===============

module.exports = function(app) {

	//API GET Requests
	//The below code handles when users "visit" a page.
	//In each of the below cases when a user visits a link
	//(ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
//====================================================================================
app.get('/api/tables', function(req, res) {
	res.json(tableData);
});

app.get('/api/waitlist', function(req, res){
	res.json(waitListData);

});

// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------
app.post('/api/tables', function(req, res){

	if(tableData.length < 5 ){
		tableData.push(req.body);
		res.json(true);
	}

	//False if do not have a table

	else {
		waitListData.push(req.body);
		res.json(false); //key Line
	}
	
});

// ---------------------------------------------------------------------------
	// Clear out the table while working with the functionality.
	

	app.post('/api/clear', function(req, res){
		// Empty out the arrays of data
		tableData = [];
		waitListData = [];

		console.log(tableData);
	})
}

