//npm packages
// =============================================================//
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// sets up the Express App
// ============================================================//
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

// this end point is telling it to respond to a get request and res is a response to the directoryname (survey).
//app.get('api/survey', function(req, res){
 // res.sendFile(path.join(__dirname, 'app/public/survey.html'))
//});


// must have an array of 10 objects that has the following properties: friendName, friendPhoto,  and scores.



// apply your exported functions to the app

// ROUTER 
var htmlRoutes = require('./app/routing/html-routes');
var apiRoutes = require('./app/routing/api-routes');
htmlRoutes.getBackground(app);
htmlRoutes.getCss(app);
htmlRoutes.getRoot(app);
htmlRoutes.getSurvey(app);
apiRoutes.postFriends(app);
apiRoutes.getFriends(app);


// default USE route that leads to home.html which displays the home page.
app.use(express.static(__dirname + '/public'));
// app.use(express.static('public'));


// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: "  + PORT);
});


//