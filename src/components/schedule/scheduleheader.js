import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function ScheduleHeader() {
  let today = new Date();
  today = today.toDateString();
  return (
    <React.Fragment>
      <div class="scheduleheader">
        <div className="timegroup">
          <span>12:00</span>
          <span id="currenttimedisplay">12:30</span>
          <span>12:45</span>
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
