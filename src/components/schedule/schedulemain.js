import React from "react";
import ScheduleHeader from "./scheduleheader";
import CurrentDisplay from "./currenttaskdisplay";
import BooleanList from "./booleanlist";
import UpcomingList from "./upcominglist";
import DayNotes from "./daynotes";
import ScheduleContextProvider from "../../contexts/schedulecontext";
import DayNotesContextProvider from "../../contexts/daynotescontext";
import BooleanContextProvider from "../../contexts/booleancontext";

function ScheduleMain() {
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
