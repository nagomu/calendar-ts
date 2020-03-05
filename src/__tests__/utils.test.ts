import { lastDayOfMonth, range } from '../utils';

describe('lastDayOfMonth', () => {
  it('returns value correctly', () => {
    expect(lastDayOfMonth(2020, 0)).toEqual(31);
  });
});

describe('range', () => {
  it('returns array correctly', () => {
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(range(0, 10)).toEqual(expected);
  });
});
