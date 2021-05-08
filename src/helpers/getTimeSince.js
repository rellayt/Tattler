export const getTimeSince = (value) => {
  const date = Date.parse(value);
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' y';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' mon';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' d';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' h';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' min';
  }
  return '1 min';
};
