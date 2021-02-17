export const getTodayDate = (): string => {
  const today = new Date();
  const day = today.getDate();
  const dd = day < 10 ? `0${day}` : day;
  const mouth = today.getMonth() + 1;
  const mm = mouth < 10 ? `0${mouth}` : mouth;
  const yyyy = today.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
};
