import React, {useState} from "react";
import CreationSidebar from "./creationsidebar";
import SchedulePreview from "./schedulepreview";
import TaskCreator from "./taskcreator";
import BackHeader from "../backheader";

function Main() {
  return (
    <React.Fragment>
      <BackHeader />
      <CreationSidebar />
      <SchedulePreview />
      <TaskCreator />
    </React.Fragment>
  );
}

export default Main;
