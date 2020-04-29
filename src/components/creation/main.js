import React, { useContext } from "react";
import CreationSidebar from "./creationsidebar";
import SchedulePreview from "./schedulepreview";
import TaskCreator from "./taskcreator";
import BackHeader from "../backheader";
import ScheduleContextProvider, {
  ScheduleContext,
} from "../../contexts/ScheduleContext";

function Main() {
  const { tasks, dispatch } = useContext(ScheduleContext);
  return (
    <ScheduleContextProvider>
      <React.Fragment>
        <div className="doubler">
          <div>
            <CreationSidebar />
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
