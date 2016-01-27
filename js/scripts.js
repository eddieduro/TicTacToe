Player = function(symbol){
  this.symbol = symbol;
  this.scores = [];
};

Player.prototype.getScore = function(value1, value2, value3){
  this.scores.push(value1, value2, value3);
  return this.scores;
};


winningCombos = [
  [1,2,3],[4,5,6],[7,8,9],[3,6,9],[2,5,8],
  [1,4,7],[1,5,9],[3,5,7]
]
