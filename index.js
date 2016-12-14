// var AWS = require('aws');
var express = require('express');
var parser = require('body-parser');
var util = require('util');
var Converter = require('./converter.js');
var Game = require('./Game.js');
var FirebaseService = require('./firebaseService.js');

var app = express();
app.use(parser.json());
app.post('/api/setScores', function(req, res) {
    //console.log('Reading data from event\n', util.inspect(event, {depth: 5}));

    convertedResult = Converter.Convert(req.body);
    var game = new Game(convertedResult);
    var finalScore = game.score();

    res.send(finalScore);
/*
    var firebaseService = new FirebaseService();
    firebaseService.SaveScores(finalScore).then(function(result) {
        console.log(result);
    },
    function(error) {
        console.log(error);
    }
  );

    //ctx.succeed(finalScore);
*/
});

app.listen(8080, function() {console.log("Server listening");});
