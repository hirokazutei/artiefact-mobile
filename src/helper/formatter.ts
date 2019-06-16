export const datetimeToDateformatter = (datetime: Date): string => {
  const date =
    datetime.getDate() < 10 ? `0${datetime.getDate()}` : datetime.getDate();
  const month =
    datetime.getMonth() + 1 < 10
      ? `0${datetime.getMonth() + 1}`
      : datetime.getMonth() + 1;
  const year = datetime.getFullYear();
  return `${year}-${month}-${date}`;
};
