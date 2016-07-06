//========================================================================
// Load Data
// Linking the routes to a series of "data" source.
//These data source hold arrays of information on table-data, waitinglist.
//========================================================================

var tableData = require('../data/table-data.js');
var waitListData = require('../data/waitinglist-data.js');

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

}):


