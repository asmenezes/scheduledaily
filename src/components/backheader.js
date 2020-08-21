import React from "react";
import { Link } from "react-router-dom";

function BackHeader() {
  let today = new Date();
  today = today.toDateString();
  return (
    <div className="backheader">
      <span id="topDate">{today}</span>
      <Link className="right topLink" to="/dayschedule">
        Schedule
      </Link>
    </div>
  );
}

export default BackHeader;
