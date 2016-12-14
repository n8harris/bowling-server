// var AWS = require('aws');
var util = require('util');
var Converter = require('./converter.js');
var Game = require('./Game.js');

// Please do not change the function name `handler`, if you want, please change the Makefile too.
exports.handler = function(event, ctx) {
  console.log('Reading data from event\n', util.inspect(event, {depth: 5}));

  try {
    convertedResult = Converter.Convert(event);
    var game = new Game(convertedResult);
    var finalScore = game.score();
  }
  catch(err){
    ctx.fail(err);
  }

  ctx.succeed(finalScore);
};
