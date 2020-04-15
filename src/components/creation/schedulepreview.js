import React, {useState} from "react";
import TaskBlock from '../taskblock';

function SchedulePreview() {
  return (
    <React.Fragment>
      <div class="schedulepreviewcontainer">
        <div class="schedulepreview">
        <TaskBlock />
        </div>
      </div>
    </React.Fragment>
  );
}

export default SchedulePreview;
