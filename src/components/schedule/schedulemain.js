import React, { useEffect, useState } from "react";
import ScheduleHeader from "./scheduleheader";
import CurrentDisplay from "./currenttaskdisplay";
import BooleanList from "./booleanlist";
import UpcomingList from "./upcominglist";
import DayNotes from "./daynotes";
import ScheduleContextProvider from "../../contexts/schedulecontext";
import DayNotesContextProvider from "../../contexts/daynotescontext";
import BooleanContextProvider from "../../contexts/booleancontext";

function ScheduleMain() {
  /////////
  //Do the functional Cock here
  ////////
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }
  function hider(x) {
    let boolist = document.getElementById("booleanlist");
    let uplist = document.getElementById("upcominglist");
    let curtask = document.getElementById("currentdisplay");
    let dayNo = document.getElementById("daynotes");
    //need to get the other things and check that instead
    let allhidden = document.getElementsByClassName("hide");
    console.log(x.matches);
    if (x.matches && uplist && curtask) {
      if (
        !uplist.classList.contains("hide") &&
        !curtask.classList.contains("hide")
      ) {
        uplist.classList.add("hide");
      }
    }
    if (x.matches && dayNo && boolist) {
      if (
        !boolist.classList.contains("hide") &&
        !dayNo.classList.contains("hide")
      ) {
        console.log("Hide bools");
        boolist.classList.add("hide");
      } else if (dayNo.classList.contains("hide")) {
        boolist.classList.remove("hide");
        console.log("unhide bools");
      } else {
      }
    }
  }

  let x = window.matchMedia("(max-width: 720px)");
  // Call listener function at run time
  window.addEventListener("resize", hider(x));
  useEffect(() => {
    hider(x);
  }, []);

  return (
    <div>
      <ScheduleContextProvider>
        <ScheduleHeader time={date} />
        <div id="schedulegrid">
          <CurrentDisplay time={date} />
          <UpcomingList time={date} />
          <DayNotesContextProvider>
            <DayNotes time={date} />
          </DayNotesContextProvider>
          <BooleanContextProvider>
            <BooleanList />
          </BooleanContextProvider>
        </div>
      </ScheduleContextProvider>
    </div>
  );
}

export default ScheduleMain;
