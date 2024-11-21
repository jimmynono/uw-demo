describe('Blackjack game tests', () => {
  it('should calculate the score of a hand', () => {
    const hand = [
      { displayVal: 'Six', suit: 'hearts', val: 6 },
      { displayVal: 'Seven', suit: 'hearts', val: 7 },
    ];

    const result = calcPoints(hand);
    expect(result.total).toEqual(13);
    expect(result.isSoft).toEqual(false);
  });
});
