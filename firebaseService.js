var FirebaseService;

FirebaseService = (function() {
    var firebase = require('firebase');
    var q = require('q');

    function FirebaseService () {
        var config = {
            apiKey: "AIzaSyAhdH_eZtwdJJMq-Ihq-IW6xFLcxm9uMpI",
            authDomain: "scrum-bowling-app.firebaseapp.com",
            databaseURL: "https://scrum-bowling-app.firebaseio.com",
            storageBucket: "scrum-bowling-app.appspot.com",
            messagingSenderId: "931978339210"
        };
        firebase.initializeApp(config);
    }

    FirebaseService.prototype.SaveScores = function(scoreData) {
        var defered = q.defer();
console.log("In SaveScores!");

/*
console.log(firebase.database());
       firebase.database().ref('gameScores/').once('value').then( function(scores) {
           console.log(scores);
         defered.resolve(scores.exportVal());
       });
*/
firebase.database.enableLogging(true);
       var scoreRef = firebase.database().ref('gameScores');
       scoreRef.on('value', function(snapshot) {
           console.log(snapshot);
         //updateStarCount(postElement, snapshot.val());
       });


        /*
        firebase.database().ref('gameScores/1')
            .set(scoreData)
            .then(function(result) {
                console.log(result);
                defered.resolve(result);
            },
            function(error) {
                console.log(error);
            }
        );
*/
        return defered.promise;
    }

    return FirebaseService;
})();

module.exports = FirebaseService;
