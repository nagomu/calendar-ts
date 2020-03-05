import { calendarDays, fill } from './utils';

export type CalendarDate = {
  date: Date;
  isToday: boolean;
};

export type CalendarList = Array<CalendarDate | undefined>;

type Calendar = (year: number, month: number) => CalendarList[];

const calendar: Calendar = (year, month) => {
  const week = 7;
  const results: CalendarList[] = [];
  const days = fill(calendarDays(year, month));

  for (let i = 0; i < Math.ceil(days.length / week); i++) {
    results.push(days.slice(i * week, i * week + week));
  }

  return results;
};

export default calendar;
