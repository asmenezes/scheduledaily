import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ScheduleContext } from "../../contexts/schedulecontext";
import { dateConv, disp12Time } from "../scripts/shared.js";
import { findCIndex } from "../scripts/currenttaskscripts";

function ScheduleHeader(props) {
  const { tasks } = useContext(ScheduleContext);
  let todayTime = disp12Time(
    props.time.getHours().toString().padStart(2, "0") +
      ":" +
      props.time.getMinutes().toString().padStart(2, "0")
  );
  let index = tasks.findIndex(
    (task) =>
      dateConv(task.startTime).setMinutes(
        dateConv(task.startTime).getMinutes() - 1
      ) <= props.time && dateConv(task.endTime) >= props.time
  );
  let percent = 0;
  if (tasks[index]) {
    let total =
      dateConv(tasks[index].endTime) -
      dateConv(tasks[index].startTime).setMinutes(
        dateConv(tasks[index].startTime).getMinutes() - 1
      );
    let part =
      props.time -
      dateConv(tasks[index].startTime).setMinutes(
        dateConv(tasks[index].startTime).getMinutes() - 1
      );
    percent = (part / total) * 100;
  }
  return (
    <React.Fragment>
      <div className="scheduleheader">
        <div className="timegroup">
          <span id="stime">
            {tasks[index] ? disp12Time(tasks[index].startTime) : ""}
          </span>
          <span id="currenttimedisplay">{todayTime}</span>
          <span id="etime">
            {tasks[index] ? disp12Time(tasks[index].endTime) : ""}
          </span>
        </div>
        <div className="baseline">
          <span>{props.time.toDateString()}</span>
          <Link className="right" to="/">
            Schedule Creator
          </Link>
        </div>
        <div id="progressbar">
          <div id="progress" style={{ width: `${percent}%` }}></div>
        </div>
      </div>
    </React.Fragment>
  );
}
//
export default ScheduleHeader;
