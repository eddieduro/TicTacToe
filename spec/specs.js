describe('Player', function(){
  it('will create a Player object', function(){
    var testPlayer = new Player("X");
    expect(testPlayer.symbol).to.equal("X");
  });

  it('will return array of values selected', function(){
    var testPlayer = new Player("X");
    expect(testPlayer.getScore(1 , 2 , 3)).to.eql([1, 2, 3]);
  });
});
