import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ScheduleContext } from "../../contexts/schedulecontext";

function ScheduleHeader() {
  const { tasks } = useContext(ScheduleContext);
  let today = new Date();
  today = today.toDateString();
  useEffect(() => {
    if (document.getElementById("progress")) {
      const prog = document.getElementById("progress");
      console.log("in progress");
      prog.style.animationName = "anim";
      prog.style.width = "50%"; //  ((et - st) - (nt - st) ) / et - st
      prog.style.animationTimingFunction = "linear";
      prog.style.animationDuration = "100000s"; //  ((et - st) - (nt - st))
      prog.style.animationIterationCount = 1;
    }
  }, []);
  return (
    <React.Fragment>
      <div className="scheduleheader">
        <div className="timegroup">
          <span>{tasks[0] ? tasks[0].startTime : null}</span>
          <span id="currenttimedisplay"></span>
          <span>{tasks[0] ? tasks[0].endTime : null}</span>
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
