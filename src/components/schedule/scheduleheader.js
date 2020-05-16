import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ScheduleContext } from "../../contexts/schedulecontext";
import { dateConv, disp12Time } from "../scripts/shared.js";

function ScheduleHeader() {
  const { tasks } = useContext(ScheduleContext);
  let todayInitial = new Date();
  let today = todayInitial.toDateString();
  useEffect(() => {
    if (document.getElementById("progress")) {
      const prog = document.getElementById("progress");
      const st = tasks[0] ? dateConv(tasks[0].startTime) : 0;
      const et = tasks[0] ? dateConv(tasks[0].endTime): 0;
      let done = ((et-st)/((et - st) - (et - todayInitial ))*10);
      let left = ((et - st) - ((et-st)/((et - st) - (et - todayInitial ))));
      // (((et - st) - (todayInitial - st))/(et-st)); Fix IIIIT
      console.log(100 - done +"%");
      prog.style.animationName = "anim";
      prog.style.width = 100 - done +"%"; //  ((et - st) - (nt - st) ) / et - st
      prog.style.animationTimingFunction = "linear";
      prog.style.animationDuration = 1+"s"; //  ((et - st) - (nt - st))
      prog.style.animationIterationCount = 1;
    }
  }, []);
  return (
    <React.Fragment>
      <div className="scheduleheader">
        <div className="timegroup">
          <span>{tasks[0] ? disp12Time(tasks[0].startTime) : null}</span>
          <span id="currenttimedisplay"></span>
          <span>{tasks[0] ? disp12Time(tasks[0].endTime) : null}</span>
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
