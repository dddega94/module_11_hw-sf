import { countDown } from '../index.js';

describe('tests for countDown function', () => {
  const optionOne = 4;
  const optionTwo = 6;
  const optionThree = 5;

  it('count down from 4', () => {
    expect(countDown(optionOne)).toBe("4, 3, 2, 1")
  }),
  it('count down from 6', () => {
    expect(countDown(optionTwo)).toBe("6, 5, 4, 3, 2, 1")
  }),
  it('count down from 8', () => {
    expect(countDown(optionThree)).toBe("8, 7, 6, 5, 4, 3, 2, 1")
  })

  it('should round off the number', () => {
    expect(countDown(3.4)).toBe('3');
});

  it('very large numbers', () => {
    expect(countDown(1000)).toBe('1000, 999, ...');
});
})