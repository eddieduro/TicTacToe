var winningCombos = [
  [1,2,3],[4,5,6],[7,8,9],[3,6,9],[2,5,8],
  [1,4,7],[1,5,9],[3,5,7]
];
var scores = [];

Player = function(symbol){
  this.symbol = symbol;
};
Score = function(val1, val2, val3, val4, val5){
  this.val1 = val1;
  this.val2 = val2;
  this.val3 = val3;
  this.val4 = val4;
  this.val5 = val5;
};


score = {
  var scores = []
  getScore: function(val1, val2, val3, val4, val5){
    this.val1 = val1;
    this.val2 = val2;
    this.val3 = val3;
    this.val4 = val4;
    this.val5 = val5;
  },
  pushScore: function(){
    scores.push(this.val1, this.val2, this.val3, this.val4, this.val5);
  },
  evaluate: function(){
    var error = "You ruined the game";
    var winning = "You won!"

    console.log(joinCombo);

    if((joinScore.substring(0,3) !== joinCombo && (joinScore.length === 5))
    || (joinScore.substring(1,4) !== joinCombo && (joinScore.length === 5))
    || (joinScore.substring(2,5) !== joinCombo && (joinScore.length === 5))) {
      return joinScore;
    } else if ((joinScore.substring(0,3) !== joinCombo)
    || (joinScore.substring(1,4) !== joinCombo)
    || (joinScore.substring(2,5) !== joinCombo)) {
      return joinScore;
    } else if (joinScore.substring(0,3) === joinCombo) {
        return winning;
    } else {
      return error;
    }
  }

}
var joinCombo;

Score.prototype.getScore = function(){
  scores.push(this.val1, this.val2, this.val3, this.val4, this.val5);
  for(var i = 0; i < winningCombos.length; i++){
    // console.log(scores.slice(0,3));
    joinCombo = winningCombos[i].join("");

  };
};
  var joinScore = scores.join("");
  console.log(joinScore);
// evaluate = function(){
//   var error = "You ruined the game";
//   var winning = "You won!"
//
//   console.log(joinCombo);
//
//   if((joinScore.substring(0,3) !== joinCombo && (joinScore.length === 5))
//   || (joinScore.substring(1,4) !== joinCombo && (joinScore.length === 5))
//   || (joinScore.substring(2,5) !== joinCombo && (joinScore.length === 5))) {
//     return joinScore;
//   } else if ((joinScore.substring(0,3) !== joinCombo)
//   || (joinScore.substring(1,4) !== joinCombo)
//   || (joinScore.substring(2,5) !== joinCombo)) {
//     return joinScore;
//   } else if (joinScore.substring(0,3) === joinCombo) {
//       return winning;
//   } else {
//     return error;
//   }
// }
// evaluate(testScore.getScore())
