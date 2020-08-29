import React, { useEffect } from "react";
import ScheduleHeader from "./scheduleheader";
import CurrentDisplay from "./currenttaskdisplay";
import BooleanList from "./booleanlist";
import UpcomingList from "./upcominglist";
import DayNotes from "./daynotes";
import ScheduleContextProvider from "../../contexts/schedulecontext";
import DayNotesContextProvider from "../../contexts/daynotescontext";
import BooleanContextProvider from "../../contexts/booleancontext";

function ScheduleMain() {
  function hider(x) {
    let thisOne = document.getElementById("booleanlist");
    let thistwo = document.getElementById("upcominglist");
    let thisthree = document.getElementsByClassName("timegroup");
    let thisfour = document.getElementById("progressbar");
    let thisone = [thisOne, thistwo, ...thisthree, thisfour];
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
    } else if (thisone[0]) {
      for (let i = 0; i < thisone.length; i++) {
        if (thisone[i].classList.contains("hide")) {
          thisone[i].classList.remove("hide");
          //Finish subtask in reducer
        }
      }
    }
  }

  let x = window.matchMedia("(max-width: 720px)");
  // Call listener function at run time
  x.addListener(hider);
  useEffect(() => {
    hider(x);
  }, []);
  return (
    <div>
      <ScheduleContextProvider>
        <ScheduleHeader />
        <div id="schedulegrid">
          <CurrentDisplay />
          <UpcomingList />
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
