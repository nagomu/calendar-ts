import {
  daysOfMonth,
  formatDate,
  isToday,
  lastDayOfMonth,
  range,
} from '../utils';

describe('formatDate', () => {
  it('returns formatted date correctly', () => {
    const date = new Date(Date.UTC(2020, 0, 1, 0, 0, 0, 0));
    expect(formatDate(date)).toEqual('1/1/2020');
  });
});

describe('isToday', () => {
  it('returns true correctly', () => {
    const date = new Date(Date.UTC(2020, 0, 1, 0, 0, 0, 0));
    const today = new Date(Date.UTC(2020, 0, 1, 1, 0, 0, 0));
    expect(isToday(date, today)).toEqual(true);
  });

  it('returns false correctly', () => {
    const date = new Date(Date.UTC(2020, 0, 1, 0, 0, 0, 0));
    const today = new Date(Date.UTC(2020, 0, 2, 0, 0, 0, 0));
    expect(isToday(date, today)).toEqual(false);
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

describe('daysOfMonth', () => {
  it('returns numbers correctly', () => {
    const expected = [];
    for (let i = 1; i <= 31; i++) expected.push(i);
    expect(daysOfMonth(2020, 0)).toEqual(expected);
  });

  it('returns numbers correctly if even leap year', () => {
    const expected = [];
    for (let i = 1; i <= 29; i++) expected.push(i);
    expect(daysOfMonth(2020, 1)).toEqual(expected);
  });
});
