import calendar from '../';

describe('calendar', () => {
  it('returns value correctly', () => {
    jest.spyOn(Date, 'now').mockReturnValue(Date.UTC(2020, 0, 1, 0, 0, 0, 0));

    const expected = [
      [
        undefined,
        undefined,
        undefined,
        { date: new Date('2020-01-01T00:00:00.000Z'), isToday: true },
        { date: new Date('2020-01-02T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-03T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-04T00:00:00.000Z'), isToday: false },
      ],
      [
        { date: new Date('2020-01-05T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-06T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-07T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-08T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-09T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-10T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-11T00:00:00.000Z'), isToday: false },
      ],
      [
        { date: new Date('2020-01-12T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-13T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-14T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-15T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-16T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-17T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-18T00:00:00.000Z'), isToday: false },
      ],
      [
        { date: new Date('2020-01-19T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-20T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-21T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-22T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-23T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-24T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-25T00:00:00.000Z'), isToday: false },
      ],
      [
        { date: new Date('2020-01-26T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-27T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-28T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-29T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-30T00:00:00.000Z'), isToday: false },
        { date: new Date('2020-01-31T00:00:00.000Z'), isToday: false },
        undefined,
      ],
    ];
    expect(calendar(2020, 0)).toEqual(expected);
  });
});
