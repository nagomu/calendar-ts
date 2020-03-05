export const lastDayOfMonth = (year: number, month: number): number => {
  const first = new Date(year, month, 1);
  return new Date(year, first.getMonth() + 1, 0).getDate();
};
