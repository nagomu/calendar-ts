import { lastDayOfMonth } from '../utils';

describe('lastDayOfMonth', () => {
  it('returns value correctly', () => {
    expect(lastDayOfMonth(2020, 0)).toEqual(31);
  });
});
