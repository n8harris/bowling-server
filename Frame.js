var Frame;

Frame = (function() {
  function Frame(rolls) {
    this.rolls = rolls ? rolls : [];
  }

  Frame.prototype.getFrameScore = function() {
    var i, j, len, ref, roll, score;
    score = 0;
    i = 0;
    ref = this.rolls;
    for (j = 0, len = ref.length; j < len; j++) {
      roll = ref[j];
      if (i === 2) {
        break;
      } else {
        score += roll.numPins;
      }
      i++;
    }
    return score;
  };

  Frame.prototype.addRoll = function(roll) {
    return this.rolls.push(roll);
  };

  return Frame;

})();

module.exports = Frame;
