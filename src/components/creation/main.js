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
    <React.Fragment>
      <div className="doubler">
        <div>
          <CreationSidebar />
        </div>
        <div className="content">
          <ScheduleContextProvider>
            <BackHeader />
            <SchedulePreview props={tasks} />
            <TaskCreator props={tasks} />
          </ScheduleContextProvider>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Main;
