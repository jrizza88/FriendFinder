// Your api-routes.js file should contain two routes:
var allFriends = require('../data/friends').friendsArray;
var path = require('path');



//Routing 
//module.exports = function(app){

  //app.get('/api/friends', function (req, res){
    //       res.json(allFriends);
  //});
//}

//  GET route with the url /api/friends.
function getFriends(app) {
    console.log('getFriends working');
    app.get('/api/friends', function(req, res) {
        // return the allFriends // This will be used to display aJSON of all possible friends.  
        res.json(allFriends);
    });
}

 // function created to find the min number of an array
   // function minofArray(num) {
    //    return Math.min.apply(null, num);
    //    console.log(minofArray);
    //};

// A POST routes /api/friends.  This will be used to handle incoming survey results.
function postFriends(app) {
    console.log('postFriends working');
    app.post('/api/friends', function(req, res) {
        // add the submitted data to the friend data array
        //allFriends.push(req.body);
        var newScore = req.body.scores;
       // var newScoreInt = 0;
        var scoreArray = [];

          for(i=0;i<allFriends.length;i++){
             var scoreDifference=0;
            var compatabilityScore=0;

                for(j=0;j<newScore.length;j++){
                  scoreDifference=Math.abs(newScore[j]-allFriends[i].scores[j]);
                  console.log("scoreDifference", scoreDifference);
                  //console.log("newScoreJJJJ", newScore[j]);
                  //console.log("newscoreIIII", allFriends[i].scores[j]);
                  compatabilityScore += scoreDifference;
                  //console.log(compatabilityScore);
                }

           scoreArray.push(compatabilityScore);
             console.log(scoreArray);
          };
         allFriends.push(req.body);
   // console.log("scoreDifference", scoreDifference);
      });
    //res.send(allFriends[index]);

}


module.exports.getFriends = getFriends;
module.exports.postFriends = postFriends;
//  
//  
//  
//  