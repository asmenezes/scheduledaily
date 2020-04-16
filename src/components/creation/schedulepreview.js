import React, {useState} from "react";
import TaskBlock from '../taskblock';

function SchedulePreview() {
  return (
    <React.Fragment>
      <div class="schedulepreviewcontainer">
        <div class="schedulepreview">
        <TaskBlock starttime={"12:43"} endtime={"14:53"} taskname={"Do this task"}/>
        <TaskBlock starttime={"1:43"} endtime={"4:53"} taskname={"Do this task"}/>
        <TaskBlock starttime={"12:43"} endtime={"14:53"} taskname={"Do this task"}/>
        <TaskBlock starttime={"12:43"} endtime={"14:53"} taskname={"Do this task"}/>
        <TaskBlock starttime={"12:43"} endtime={"14:53"} taskname={"Do this task"}/>
        <TaskBlock starttime={"12:43"} endtime={"14:53"} taskname={"Do this task"}/>
        <TaskBlock starttime={"12:43"} endtime={"14:53"} taskname={"Do this task"}/>
        <TaskBlock starttime={"12:43"} endtime={"14:53"} taskname={"Do this task"}/>
        <TaskBlock starttime={"12:43"} endtime={"14:53"} taskname={"Do this task"}/>
        <TaskBlock starttime={"12:43"} endtime={"14:53"} taskname={"Do this task"}/>
        <TaskBlock starttime={"12:43"} endtime={"14:53"} taskname={"Do this task"}/>

          </div>
      </div>
    </React.Fragment>
  );
}

export default SchedulePreview;
