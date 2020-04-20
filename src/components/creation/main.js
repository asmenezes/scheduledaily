import React, { useState } from "react";
import CreationSidebar from "./creationsidebar";
import SchedulePreview from "./schedulepreview";
import TaskCreator from "./taskcreator";
import BackHeader from "../backheader";

function Main() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default Main;
