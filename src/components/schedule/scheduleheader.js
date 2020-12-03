import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ScheduleContext } from "../../contexts/schedulecontext";
import { dateConv, disp12Time } from "../scripts/shared.js";
import { findCIndex } from "../scripts/currenttaskscripts";

function ScheduleHeader(props) {
  const { tasks } = useContext(ScheduleContext);
  let todayTime = disp12Time(
    props.time.getHours() + ":" + props.time.getMinutes()
  );
  let index = tasks.findIndex(
    (task) =>
      dateConv(task.startTime).setMinutes(
        dateConv(task.startTime).getMinutes() - 1
      ) <= props.time && dateConv(task.endTime) >= props.time
  );
  console.log(tasks[index]);
  console.log(props.time);
  console.log(dateConv(tasks[1].startTime));
  // useEffect(() => {
  //   index = findCIndex(tasks);
  //   // if (document.getElementById("progress")) {
  //   //   const prog = document.getElementById("progress");
  //   //   const st = tasks[index] ? dateConv(tasks[index].startTime) : 0;
  //   //   const et = tasks[index] ? dateConv(tasks[index].endTime) : 0;
  //   //   let left = et - now;
  //   //   //use left to set timeout update the state
  //   //   let total = et - st;
  //   //   console.log((left / total) * 100 + "%");
  //   //   prog.style.animationName = "anim";
  //   //   prog.style.width = ((total - left) / total) * 100 + "%";
  //   //   prog.style.maxwidth = "100vw";
  //   //   prog.style.animationTimingFunction = "linear";
  //   //   prog.style.animationDuration = left + "ms";
  //   //   prog.style.animationIterationCount = 1;
  //   // }
  // }, [tasks]);
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
          <div id="progress"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ScheduleHeader;
