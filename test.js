var handler = require('./').handler;
var ctx = require('./test/ctx');
var event = require('./test/bowlingscores.json');

handler(event, ctx);
