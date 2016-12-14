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
        this.frames[this.frames.length - 1].addRoll(new Roll(roll));
      }
    }
  }

  Game.prototype.score = function() {
    var frame, frameIndex, frameScore, i, index, j, len, len1, ref, ref1, result, roll;
    result = {};
    result.score = 0;
    result.frames = [];
    ref = this.frames;
    for (frameIndex = i = 0, len = ref.length; i < len; frameIndex = ++i) {
      frame = ref[frameIndex];
      frameScore = 0;
      ref1 = frame.rolls;
      for (index = j = 0, len1 = ref1.length; j < len1; index = ++j) {
        roll = ref1[index];
        if (this.frames.hasOwnProperty(frameIndex + 1)) {
          if (index !== 0 & roll.isSpare(frameScore)) {
            frameScore += this.frames[frameIndex + 1].rolls[0].numPins;
          } else if (roll.isStrike()) {
            if (this.frames[frameIndex + 1].rolls[0].isStrike() & !this.isLastFrame(frameIndex + 1)) {
              frameScore += this.frames[frameIndex + 1].getFrameScore() + this.frames[frameIndex + 2].rolls[0].numPins;
            } else {
              frameScore += this.frames[frameIndex + 1].getFrameScore();
            }
          }
        }
        frameScore += roll.numPins;
      }
      result.frames.push(frameScore);
      result.score += frameScore;
    }
    return result;
  };

  Game.prototype.isLastFrame = function(index) {
    if (index + 1 === this.frames.length) {
      return true;
    } else {
      return false;
    }
  };

  return Game;

})();

module.exports = Game;
