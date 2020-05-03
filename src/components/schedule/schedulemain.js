import React, { useContext } from "react";
import ScheduleHeader from "./scheduleheader";
import CurrentDisplay from "./currenttaskdisplay";
import BooleanList from "./booleanlist";
import UpcomingList from "./upcominglist";
import DayNotes from "./daynotes";
import ScheduleContextProvider, {
  ScheduleContext,
} from "../../contexts/schedulecontext";

function ScheduleMain() {
  const { tasks } = useContext(ScheduleContext);
  return (
    <div>
      <ScheduleHeader />
      <div id="schedulegrid">
        <ScheduleContextProvider>
          <CurrentDisplay task={tasks.length ? tasks[0] : []} />
          <UpcomingList tasks={tasks} />
          <DayNotes />
          <BooleanList />
        </ScheduleContextProvider>
      </div>
    </div>
  );
}

export default ScheduleMain;
