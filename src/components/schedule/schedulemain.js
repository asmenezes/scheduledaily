import React, { useState } from "react";
import ScheduleHeader from "./scheduleheader";
import CurrentDisplay from "./currenttaskdisplay";
import BooleanList from "./booleanlist";
import UpcomingList from "./upcominglist";
import DayNotes from "./daynotes";

function ScheduleMain() {
  return (
    <div>
      <ScheduleHeader />
      <div id="schedulegrid">
        <CurrentDisplay />
        <UpcomingList />
        <DayNotes />
        <BooleanList />
      </div>
    </div>
  );
}

export default ScheduleMain;
