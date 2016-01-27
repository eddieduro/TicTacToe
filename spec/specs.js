describe('Player', function(){
  var testPlayer = new Player("X");
  it('will create a Player object', function(){
    expect(testPlayer.symbol).to.equal("X");
  });
});

describe('Score', function(){
  var testScore = new Score(1,2,3);
  var testScore2 = new Score(2,5,7);

  it('will evaluate scores and return 3 in a row', function(){
    expect(testScore.getScore()).to.equal("You Won!");
  });
  it('will return string of values selected and compare it to the winning combos', function(){
    expect(testScore2.getScore()).to.equal("257");
  });
});




  // it('will not return 3 in a row', function(){
  //   var testEvaluation = [3,2,8];
  //   expect(testEvaluation).to.equal("Loser");
  // });
