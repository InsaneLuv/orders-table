const convertToReadableDate = (date: string): string => {
  const readableDateTime = new Date(date).toLocaleString("ru-RU", {
    timeZone: "Europe/Moscow",
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  return readableDateTime;
};
export default convertToReadableDate;
