var Frame = require('./Frame.js');
var Roll = require('./Roll.js');

var Game;

Game = (function() {
  function Game(frames) {
    var frame, i, index, j, len, len1, roll;
    this.frames = [];
    for (index = i = 0, len = frames.length; i < len; index = ++i) {
      frame = frames[index];
      this.frames.push(new Frame());
      for (j = 0, len1 = frame.length; j < len1; j++) {
        roll = frame[j];
        this.frames[index].addRoll(new Roll(roll));
      }
    }
  }

  Game.prototype.score = function() {
    var frame, frameScore, i, len, ref, result;
    result = {};
    result.score = 0;
    result.frames = [];
    ref = this.frames;
    for (i = 0, len = ref.length; i < len; i++) {
      frame = ref[i];
      frameScore = frame.getFrameScore();
      result.frames.push(frameScore);
      result.score += frameScore;
    }
    return result;
  };

  return Game;

})();

module.exports = Game;
