import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ScheduleContext } from "../../contexts/schedulecontext";
import { dateConv, disp12Time } from "../scripts/shared.js";

function ScheduleHeader(props) {
  const { tasks } = useContext(ScheduleContext);
  let todayTime = disp12Time(
    props.time.getHours().toString().padStart(2, "0") +
      ":" +
      props.time.getMinutes().toString().padStart(2, "0")
  );
  //finds the inddx of the current task if there is one
  let index = tasks.findIndex(
    //for some reason provides index if I use just getMinutes no -1
    //dont know why it needs to be one minute before, look at task creation
    (task) =>
      dateConv(task.startTime)<= props.time && dateConv(task.endTime) >= props.time
  );
  let percent = 0;
  //calculating the amount of time left in a task
  if (tasks[index]) {
    let total =
      dateConv(tasks[index].endTime) -
      dateConv(tasks[index].startTime)
    let part =
      props.time -
      dateConv(tasks[index].startTime)

    percent = (part / total) * 100;
    console.log(`Percent = ${percent}`)
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
