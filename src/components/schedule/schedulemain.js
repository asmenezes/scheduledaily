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
    let thisOne = document.getElementById("booleanlist");
    let thistwo = document.getElementById("upcominglist");
    let thisone = [thisOne, thistwo];
    let allhidden = document.getElementsByClassName("hide");
    console.log(x.matches);
    if (x.matches && thisone[0]) {
      for (let i = 0; i < thisone.length; i++) {
        if (!thisone[i].classList.contains("hide")) {
          thisone[i].classList.add("hide");
          //Finish subtask in reducer
        } else {
          //thisone[i].classList.remove("hide");
          //unfinish subtask in reducer
        }
      }
    } else if (x.matches == false) {
      console.log(allhidden.length);
      for (let i = 0; i < allhidden.length; i++) {
        if (allhidden[i].classList.contains("hide")) {
          allhidden[i].classList.remove("hide");
          console.log(allhidden);
        }
      }
    } else {
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
            <DayNotes />
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
