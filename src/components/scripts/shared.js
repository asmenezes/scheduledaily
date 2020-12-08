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
  if (hours === 12) {
    let newtime = hours + ":" + timeString.substring(3, 5) + "pm";
    return newtime;
  }
  if (hours === 0) {
    hours = 12;
  }
  let newtime = hours + ":" + timeString.substring(3, 5) + "am";

  return newtime;
};

export let now = new Date();

export const isToday = () => {
  const date = localStorage.getItem("date");
  let today = new Date();
  let oldDate = date ? new Date(date) : new Date();
  if (
    oldDate.getMonth() < today.getMonth() ||
    oldDate.getDay() < today.getDay() ||
    oldDate.getFullYear() < today.getFullYear()
  ) {
    localStorage.setItem("date", today.toDateString());
    console.log("Is today false");
    return false;
  } else {
    console.log("Is today true");
    localStorage.setItem("date", today.toDateString());
    return true;
  }
};
