describe('bowling score', function() {
  it('should allow all 0s game', function() {
    var result;
    this.frames = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
    this.game = new Game(this.frames);
    result = this.game.score();
    return expect(result.score).to.equal(0);
  });
  it('should correctly score regular frame', function() {
    var result;
    this.frames = [[3, 6], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]];
    this.game = new Game(this.frames);
    result = this.game.score();
    expect(result.score).to.equal(9);
    return expect(result.frames).to.deep.equal([9, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
});