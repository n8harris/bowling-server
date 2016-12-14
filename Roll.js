var Roll;

Roll = (function() {
  function Roll(pins) {
    this.numPins = pins ? pins : 0;
  }

  Roll.prototype.isStrike = function() {
    return this.numPins === 10;
  };

  Roll.prototype.isSpare = function(lastRoll) {
    return this.numPins + lastRoll === 10;
  };

  return Roll;

})();

module.exports = Roll;
