import React from "react";
import CreationSidebar from "./creationsidebar";
import SchedulePreview from "./schedulepreview";
import TaskCreator from "./taskcreator";
import BackHeader from "../backheader";
import ScheduleContextProvider from "../../contexts/schedulecontext";
import DayNotesContextProvider from "../../contexts/daynotescontext";
import BooleanContextProvider from "../../contexts/booleancontext";
import DayPresetContextProvider from "../../contexts/daypresetcontext";
function Main() {
  return (
    <ScheduleContextProvider>
      <React.Fragment>
        <div className="doubler">
          <div>
            <BooleanContextProvider>
              <DayNotesContextProvider>
                <DayPresetContextProvider>
                  <CreationSidebar />
                </DayPresetContextProvider>
              </DayNotesContextProvider>
            </BooleanContextProvider>
          </div>

          <div className="content">
            <BackHeader />
            <SchedulePreview />
            <TaskCreator />
          </div>
        </div>
      </React.Fragment>
    </ScheduleContextProvider>
  );
}

export default Main;
