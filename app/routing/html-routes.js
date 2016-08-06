// Your html-routes.js file 
// should include two routes:
var path = require('path');
//app.use(express.static('app'));
// 
// A default USE route that leads to home.html (displays home page)
//   write a function to export
function getRoot(app) {
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    });
}
//////// A GET Route to /survey which should display the survey page ///////
// app responds to a get requests at /survey, responds with survey.html
//  should display the survey page.
function getSurvey(app) {
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });
}

function getCss(app){
  app.use('/css', function(req, res){
        res.sendFile(path.join(__dirname, '/../public/css/style.css'));
  });
}

function getBackground(app){
  app.use('/background', function(req, res){
    res.sendFile(path.join(__dirname + '/../public/css/bestFriends.jpg'));
  });
}

module.exports.getRoot = getRoot;
module.exports.getSurvey = getSurvey;
module.exports.getCss= getCss;
module.exports.getBackground= getBackground;
// 
// 