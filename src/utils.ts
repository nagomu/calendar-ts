import { CalendarDate } from './';

export const firstDay = (days: CalendarDate[]): number => days[0].date.getDay();

export const lastDay = (days: CalendarDate[]): number =>
  days[days.length - 1].date.getDay();

export const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat('en-US').format(date);

export const isToday = (date: Date, today: Date): boolean =>
  formatDate(date) === formatDate(today);

export const lastDayOfMonth = (year: number, month: number): number => {
  const first = new Date(year, month, 1);
  return new Date(year, first.getMonth() + 1, 0).getDate();
};

export const range = (start: number, end: number): number[] => {
  const list = [];
  for (let i = start; i <= end; i++) list.push(i);
  return list;
};

export const daysOfMonth = (year: number, month: number): number[] =>
  range(1, lastDayOfMonth(year, month));

export const calendarDays = (year: number, month: number): CalendarDate[] => {
  const today = new Date(Date.now());
  return daysOfMonth(year, month).map(i => {
    const date = new Date(Date.UTC(year, month, i, 0, 0, 0));
    return { date, isToday: isToday(date, today) };
  });
};

export const fill = (days: CalendarDate[]): Array<CalendarDate | undefined> => {
  const first = range(1, firstDay(days)).map(() => undefined);
  const last = range(1, 6 - lastDay(days)).map(() => undefined);
  return [...first, ...days, ...last];
};
