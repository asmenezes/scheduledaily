import React, { useContext } from "react";
import ScheduleHeader from "./scheduleheader";
import CurrentDisplay from "./currenttaskdisplay";
import BooleanList from "./booleanlist";
import UpcomingList from "./upcominglist";
import DayNotes from "./daynotes";
import ScheduleContextProvider from "../../contexts/schedulecontext";

function ScheduleMain() {
  return (
    <div>
      <ScheduleContextProvider>
        <ScheduleHeader />
        <div id="schedulegrid">
          <CurrentDisplay />
          <UpcomingList />
          <DayNotes />
          <BooleanList />
        </div>
      </ScheduleContextProvider>
    </div>
  );
}

export default ScheduleMain;
