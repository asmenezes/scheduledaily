import React, { useContext } from "react";
import ScheduleHeader from "./scheduleheader";
import CurrentDisplay from "./currenttaskdisplay";
import BooleanList from "./booleanlist";
import UpcomingList from "./upcominglist";
import DayNotes from "./daynotes";
import { ScheduleContext } from "../../contexts/ScheduleContext";

function ScheduleMain() {
  const { tasks } = useContext(ScheduleContext);
  return (
    <div>
      <ScheduleHeader />
      <div id="schedulegrid">
        <CurrentDisplay task={tasks[0]} />
        <UpcomingList tasks={tasks} />
        <DayNotes />
        <BooleanList />
      </div>
    </div>
  );
}

export default ScheduleMain;
