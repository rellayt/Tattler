export const isToday = (value) => {
  const date = new Date(Date.parse(value));
  const today = new Date();
  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
};
