//=======================================================
// Dependencies
// npm packages to give our server useful functionality
//=======================================================

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var exphbs = require('express-handlebars');

//============================================
//EXPRESS CONFIGURATION
//Sets up basic properties for ex[ress server
//============================================

var app = express(); // Call node that I am creating an "express" server
var PORT = process.enve.PORT || 8080; // Sets an initial port.

//BodyParser makes it easy for my server to interpret data sent to it.
//The code below is pretty standar.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded{extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));


//===================================
//ROUTER 
//Points our server to a series of "route" files.
//These routes give our server a "map" o "way" of how to respond when users visit or request data from various URLs.
//===================================

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

//==================================
//LISTENER
// This code "starts" our server
//==================================

app.listen(PORT, function () {
	console.log("App listening on PORT:" + PORT);
}
