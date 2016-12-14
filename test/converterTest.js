var expect = require("chai").expect;
var assert = require("assert");
var Converter = require('../converter.js');

describe("Data Input Converter", function() {
    beforeEach(function() {
        this.rawInput = {"game": "13 X 32 3/ 36 9- 81 9- 11 72"};
    });

    afterEach(function() {
    });

    it("Check that convert returns an array", function() {
        var result = Converter.Convert(this.rawInput);
        assert(Array.isArray(result));
    });

    it("Check that frame results have a length of 10 frames", function() {
        var result = Converter.Convert(this.rawInput);

        expect(result.length).to.equal(10);
    });

    it("Check if IsStrike", function() {
        var roll = "X";

        expect(Converter.IsStrike(roll)).to.equal(true);
    });

    it("Check if NOT IsStrike", function() {
        var roll = "3";

        expect(Converter.IsStrike(roll)).to.equal(false);
    });

    it("Check if IsSpare", function() {
        var roll = "/";

        expect(Converter.IsSpare(roll)).to.equal(true);
    });

    it("Check if NOT IsSpare", function() {
        var roll = "3";

        expect(Converter.IsSpare(roll)).to.equal(false);
    });

    it("Check if IsGutter", function() {
        var roll = "-";

        expect(Converter.IsGutter(roll)).to.equal(true);
    });

    it("Check if NOT IsGutter", function() {
        var roll = "3";

        expect(Converter.IsGutter(roll)).to.equal(false);
    });

    it("Check if frame data returns an array", function() {
        var rawDataItem = "13";
        var frameData = Converter.GetFrameData(rawDataItem);

        assert(Array.isArray(frameData));
    });

    it("Check that frame data sum of each frame does not exceed 10", function() {
        var result = Converter.Convert(this.rawInput);

        result.forEach(function(frameData, index) {
            var sum = parseInt(frameData[0]) + parseInt(frameData[1]);
            expect(sum).to.be.at.most(10);
        });
    });


    it("Check if 10 is returned for strike", function() {
        var rawDataItem = "X";

        expect(Converter.GetRollData(rawDataItem, 0)).to.equal(10);
    });

    it("Check if sum of frame is 10 for spare", function() {
        var rawDataItem = "1/";
        var frameData = Converter.GetFrameData(rawDataItem);
        var sum = parseInt(frameData[0]) + parseInt(frameData[1]);

        expect(sum).to.equal(10);
    });
});
