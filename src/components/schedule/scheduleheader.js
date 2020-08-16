import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ScheduleContext } from "../../contexts/schedulecontext";
import { dateConv, disp12Time, now } from "../scripts/shared.js";
import { findCIndex } from "../scripts/currenttaskscripts";

function ScheduleHeader() {
  const { tasks } = useContext(ScheduleContext);
  let today = now.toDateString();
  let index = findCIndex(tasks);
  useEffect(() => {
    index = findCIndex(tasks);
    if (document.getElementById("progress")) {
      const prog = document.getElementById("progress");
      const st = tasks[index] ? dateConv(tasks[index].startTime) : 0;
      const et = tasks[index] ? dateConv(tasks[index].endTime) : 0;
      let left = et - now;
      //use left to set timeout update the state
      let total = et - st;
      console.log((left / total) * 100 + "%");
      prog.style.animationName = "anim";
      prog.style.width = ((total - left) / total) * 100 + "%";
      prog.style.animationTimingFunction = "linear";
      prog.style.animationDuration = left + "ms";
      prog.style.animationIterationCount = 1;
    }
  }, []);
  return (
    <React.Fragment>
      <div className="scheduleheader">
        <div className="timegroup">
          <span>
            {tasks[index] ? disp12Time(tasks[index].startTime) : null}
          </span>
          <span id="currenttimedisplay"></span>
          <span>{tasks[index] ? disp12Time(tasks[index].endTime) : null}</span>
        </div>
        <div className="baseline">
          <span>{today}</span>
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
