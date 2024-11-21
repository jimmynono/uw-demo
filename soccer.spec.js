describe('Soccer tests', () => {
  it('should return accurate score', () => {
    const results = getTotalPoints('wwdlw');
    expect(results).toBe(10);
  });
});
