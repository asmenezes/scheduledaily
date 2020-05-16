export const dateConv = (time) => {
  let today = new Date();
  today.setHours(Number(time.substring(0, 2)));
  today.setMinutes(Number(time.substring(3, 5)));
  return today;
};
export const disp12Time = (timeString) => {
  return null;
};
