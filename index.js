// var AWS = require('aws');
var express = require('express');
var parser = require('body-parser');
var util = require('util');
var Converter = require('./converter.js');
var Game = require('./Game.js');
var FirebaseService = require('./firebaseService.js');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(parser.json());

var firebaseService = new FirebaseService();

app.get('/api/getScores', function(req, res) {
    var gameResults = "unknown";

    firebaseService.GetScores().then(function(result) {
        gameResults = result;
        res.send(gameResults);
    }, function(error) {
        gameResults = "error";
        res.send(gameResults);
    });
});

app.post('/api/setScores', function(req, res) {
    //console.log('Reading data from event\n', util.inspect(event, {depth: 5}));

    convertedResult = Converter.Convert(req.body);
    var game = new Game(convertedResult);
    var finalScore = game.score();

    firebaseService.SaveScores(finalScore).then(function(result) {
    },
    function(error) {
    }
  );

  res.send(finalScore);
});

app.listen(8080, function() {console.log("Server listening");});
