import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ScheduleContext } from "../../contexts/schedulecontext";
function ScheduleHeader() {
  const { tasks } = useContext(ScheduleContext);
  let today = new Date();
  today = today.toDateString();
  return (
    <React.Fragment>
      <div class="scheduleheader">
        <div className="timegroup">
          <span>{tasks[0] ? tasks[0].startTime : null}</span>
          <span id="currenttimedisplay">12:30</span>
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
