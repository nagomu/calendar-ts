export const lastDayOfMonth = (year: number, month: number): number => {
  const first = new Date(year, month, 1);
  return new Date(year, first.getMonth() + 1, 0).getDate();
};

export const range = (start: number, end: number): number[] => {
  const list = [];
  for (let i = start; i <= end; i++) list.push(i);
  return list;
};
