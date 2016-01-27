// describe('Board', function(){
//   it('will create a board with 9 spaces')
// });

describe('Player', function(){
  it('will create a Player object', function(){
    var testPlayer = new Player("X");
    expect(testPlayer.symbol).to.equal("X");
  });
});
