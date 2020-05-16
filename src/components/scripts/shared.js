export const dateConv = (time) => {
  let today = new Date();
  today.setHours(Number(time.substring(0, 2)));
  today.setMinutes(Number(time.substring(3, 5)));
  return today;
};
export const disp12Time = (timeString) => {
  //if 1st 2 are more than 12 subtract 11
  let hours = Number(timeString.substring(0,2));
  if(hours > 12){
    hours -= 12;
    let newtime = (hours + ":" + timeString.substring(3,5) + "pm")
    return newtime
  }
  return timeString + "am";
};
