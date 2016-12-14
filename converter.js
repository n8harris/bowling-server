var _self = module.exports = {
    Convert: function(rawInput) {
        var aInput = rawInput.game.split(' ');
        var convertedData = [];

        aInput.forEach(function(item, index) {
            var frameData = _self.GetFrameData(item);
            convertedData.push(frameData);
        });

        return convertedData;
    },

    GetFrameData: function(rawFrame) {
        var frameData = [];
        var aRawFrame = rawFrame.split('');

        aRawFrame.forEach(function(rawRoll , index) {
            var firstRoll = index >= 1 ? frameData[0] : 0;
            frameData.push(_self.GetRollData(rawRoll, firstRoll));
        });

        if(frameData.length == 1)
            frameData.push(0);

        return frameData;
    },

    GetRollData: function(rawRoll, firstRoll) {
        var rollValue = 0;

        if(_self.IsStrike(rawRoll))
            rollValue = 10;
        else if(_self.IsSpare(rawRoll)) {
            rollValue = 10 - parseInt(firstRoll);
        }
        else if(_self.IsGutter(rawRoll)) {
            rollValue = 0;
        }
        else rollValue = parseInt(rawRoll);

        return rollValue;
    },

    IsStrike: function (inputChar) {
        return inputChar.toUpperCase() == 'X';
    },

    IsSpare: function (inputChar) {
        return inputChar == '/';
    },

    IsGutter: function(inputChar) {
        return inputChar == '-';
    }
};
