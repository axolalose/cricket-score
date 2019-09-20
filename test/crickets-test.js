const assert = require('assert');

const cricket = require("../cricket-score");

describe('cricket-score', function(){

    const cricketScore = cricket();

    it('should be able to show added Wickets', function(){
        cricketScore.Added('-1-1-1-');
        assert.equal(0, cricketScore.getTotal());
    });

    it('should be able to show new scores', function(){
        cricketScore.Added('score');
        assert.equal( cricketScore.Added('score'));
    });

    it('should be able to show how many players are to show on the pitch', function(){
        cricketScore.Added('playersAvail');
        assert.equal( cricketScore.Added('playersAvail'));
    });

});

