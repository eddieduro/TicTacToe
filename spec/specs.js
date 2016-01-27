describe('Player', function(){
  var testPlayer = new Player("X");
  it('will create a Player object', function(){
    expect(testPlayer.symbol).to.equal("X");
  });
});

describe('evaluate', function(){
    var testScore = new Score(1,2,3);
    it('will evaluate scores and return 3 in a row', function(){
      expect(testScore.evaluate()).to.equal("You won!");
    });
  // var testScore2 = new Score(2,5,7);


  // it('will return string of values selected and compare it to the winning combos', function(){
  //   expect(testScore2.getScore()).to.equal("257");
  // });
});




  // it('will not return 3 in a row', function(){
  //   var testEvaluation = [3,2,8];
  //   expect(testEvaluation).to.equal("Loser");
  // });


takeTurn
  - activated by click listener
  - add that spot to the players score
  - run evaluate function to see if theres a winner
  - (if no winner: switch the playerTurn variable)
  - (if winner: )

* board with buttons of shared classes;
class removed when clicked on
