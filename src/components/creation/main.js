import React, { useContext } from "react";
import CreationSidebar from "./creationsidebar";
import SchedulePreview from "./schedulepreview";
import TaskCreator from "./taskcreator";
import BackHeader from "../backheader";
import ScheduleContextProvider, {
  ScheduleContext,
} from "../../contexts/schedulecontext";
import DayNotesContextProvider from "../../contexts/daynotescontext"

function Main() {
  const { tasks } = useContext(ScheduleContext);
  return (
    <ScheduleContextProvider>
      <React.Fragment>
        <div className="doubler">
          <div>
          <DayNotesContextProvider>
            <CreationSidebar />
            </DayNotesContextProvider>
          </div>

          <div className="content">
            <BackHeader />
            <SchedulePreview tasks={tasks} />
            <TaskCreator />
          </div>
        </div>
      </React.Fragment>
    </ScheduleContextProvider>
  );
}

export default Main;
