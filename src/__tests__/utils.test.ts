import { formatDate, lastDayOfMonth, range } from '../utils';

describe('formatDate', () => {
  it('returns formatted date correctly', () => {
    const date = new Date(Date.UTC(2020, 0, 1, 0, 0, 0, 0));
    expect(formatDate(date)).toEqual('1/1/2020');
  });
});

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
