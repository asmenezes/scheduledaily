export const dateConv = (time) => {
  let today = new Date();
  today.setHours(Number(time.substring(0, 2)));
  today.setMinutes(Number(time.substring(3, 5)));
  return today;
};
export const disp12Time = (timeString) => {
  let hours = Number(timeString.substring(0, 2));
  if (hours > 12) {
    hours -= 12;
    let newtime = hours + ":" + timeString.substring(3, 5) + "pm";
    return newtime;
  }

  let newtime = hours + ":" + timeString.substring(3, 5) + "am";
  return newtime;
};

export let now = new Date();
