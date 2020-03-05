import {
  calendarDays,
  daysOfMonth,
  fill,
  firstDay,
  formatDate,
  isToday,
  lastDay,
  lastDayOfMonth,
  range,
} from '../utils';

describe('firstDay', () => {
  it('returns Wednesday correctly', () => {
    jest.spyOn(Date, 'now').mockReturnValue(Date.UTC(2020, 0, 1, 0, 0, 0, 0));
    const days = calendarDays(2020, 0);
    expect(firstDay(days)).toEqual(3);
  });
});

describe('lastDay', () => {
  it('returns Friday correctly', () => {
    jest.spyOn(Date, 'now').mockReturnValue(Date.UTC(2020, 0, 1, 0, 0, 0, 0));
    const days = calendarDays(2020, 0);
    expect(lastDay(days)).toEqual(5);
  });
});

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

describe('calendarDays', () => {
  it('returns value correctly', () => {
    jest.spyOn(Date, 'now').mockReturnValue(Date.UTC(2020, 0, 1, 0, 0, 0, 0));
    const days = calendarDays(2020, 0);
    expect(days[0].date.getDate()).toEqual(1);
    expect(days[0].isToday).toEqual(true);
    expect(days[30].date.getDate()).toEqual(31);
    expect(days[30].isToday).toEqual(false);
  });
});

describe('fill', () => {
  it('returns value correctly', () => {
    jest.spyOn(Date, 'now').mockReturnValue(Date.UTC(2020, 0, 1, 0, 0, 0, 0));
    const days = fill(calendarDays(2020, 0));
    expect(days.length).toEqual(35);
    expect(days[0]).toEqual(undefined);
    expect(days[1]).toEqual(undefined);
    expect(days[2]).toEqual(undefined);
    expect(days[3]?.date.getDate()).toEqual(1);
    expect(days[3]?.isToday).toEqual(true);
    expect(days[33]?.date.getDate()).toEqual(31);
    expect(days[34]).toEqual(undefined);
  });
});
