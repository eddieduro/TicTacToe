var winningCombos = [
  [1,2,3],[4,5,6],[7,8,9],[3,6,9],[2,5,8],
  [1,4,7],[1,5,9],[3,5,7]
];
var scores = [];
var joinScore;
var joinCombo;
var playerTurn;

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

Score.prototype.joinScore = function() {
  scores.push(this.val1, this.val2, this.val3, this.val4, this.val5);
  joinScore = scores.join("");
  return joinScore;
};

joinComboFunction = function(){
  for(var i = 0; i < winningCombos.length; i++){
    joinCombo = winningCombos[i].join("");
    return joinCombo;
  };
};


Score.prototype.evaluate = function(){
  var error = "You ruined the game";
  var winning = "You won!"
  console.log(joinScore);
  joinComboFunction();

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
  };
};

$(document).ready(function(){
  var arr = [];

// playerChoice = function(){
//   $('td#one').click(function(){
//     var Player1 = new Score();
//     var pushVal = (Player1.val1 = 1);
//     arr.push(pushVal);
//     console.log(arr)
//   });
//
//   $('td#two').click(function(){
//     var Player1 = new Score();
//     var pushVal = (Player1.val2 = 2);
//     arr.push(pushVal);
//     console.log(arr);
//   });
//   $('td#three').click(function(){
//     var Player1 = new Score();
//     Player1.val3 = 3;
//     console.log(Player1);
//   });
//   $('td#four').click(function(){
//     var Player1 = new Score();
//     Player1.val4 = 4;
//     console.log(Player1);
//   });
//   $('td#five').click(function(){
//     var Player1 = new Score();
//     Player1.val5 = 5;
//     console.log(Player1);
//   });
//   $('td#six').click(function(){
//     var Player1 = new Score();
//     Player1.val6 = 6;
//     console.log(Player1);
//   });
//   $('td#seven').click(function(){
//     var Player1 = new Score();
//     Player1.val7 = 7;
//     console.log(Player1);
//   });
//   $('td#eight').click(function(){
//     var Player1 = new Score();
//     Player1.val8 = 8;
//     console.log(Player1);
//   });
//   $('td#nine').click(function(){
//     var Player1 = new Score();
//     Player1.val9 = 9;
//     console.log(Player1);
//   });
// }
// playerChoice();
});
var newPlayer = new Score(1,2,3);
var y = newPlayer.joinScore();
console.log(y);
joinComboFunction();
