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

    FirebaseService.prototype.GetScores = function() {
        var defered = q.defer();

        firebase.database().ref('gameScores/').once('value').then( function(scores) {
            console.log(scores.exportVal());
          defered.resolve(scores.exportVal());
        });

        return defered.promise;
    }

    FirebaseService.prototype.SaveScores = function(scoreData) {
        var defered = q.defer();

        //firebase.database.enableLogging(true);
        firebase.database().ref('gameScores')
            .push(scoreData)
            .then(function(result) {
                defered.resolve(result);
            },
            function(error) {
            }
        );
        return defered.promise;
    }

    return FirebaseService;
})();

module.exports = FirebaseService;
