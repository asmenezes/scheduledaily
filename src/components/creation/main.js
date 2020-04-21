import React, { useState } from "react";
import CreationSidebar from "./creationsidebar";
import SchedulePreview from "./schedulepreview";
import TaskCreator from "./taskcreator";
import BackHeader from "../backheader";
import ScheduleContextProvider from "../../contexts/ScheduleContext";

function Main() {
  return (
    <React.Fragment>
      <ScheduleContextProvider>
        <div className="doubler">
          <div>
            <CreationSidebar />
          </div>
          <div className="content">
            <BackHeader />
            <SchedulePreview />
            <TaskCreator />
          </div>
        </div>
      </ScheduleContextProvider>
    </React.Fragment>
  );
}

export default Main;
