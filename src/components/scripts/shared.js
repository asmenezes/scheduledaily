export const dateConv = (time) => {
  let today = new Date();
  today.setHours(Number(time.substring(0, 2)));
  today.setMinutes(Number(time.substring(3, 5)));
  return today;
};
export const disp12Time = (timeString) => {
  let hours = Number(timeString.substring(0, 2));
  let minutes = Number(timeString.substring(3, 5));
  if (minutes > 59) {
    minutes %= 60;
  }
  minutes = minutes.toString().padStart(2, "0");
  if (hours > 12 && hours <= 23) {
    hours -= 12;
    let newtime = hours + ":" + minutes + "pm";
    return newtime;
  }
  if (hours > 12) {
    hours %= 12;
  }

  if (hours === 12) {
    let newtime = hours + ":" + minutes + "pm";
    return newtime;
  }
  if (hours === 0) {
    hours = 12;
  }
  let newtime = hours + ":" + minutes + "am";

  return newtime;
};

export let now = new Date();

export let checker = false;

export const isToday = () => {
  if (!checker) {
    checker = true;
    return isToday2();
  } else {
    return true;
  }
};

const isToday2 = () => {
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
    console.log(`oldDate is  ${oldDate}`);
    return false;
  } else {
    console.log("Is today true");
    localStorage.setItem("date", today.toDateString());
    return true;
  }
};
