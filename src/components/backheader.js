import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function BackHeader() {
  let today = new Date();
  today = today.toDateString();
  return (
    <div className="backheader">
      <span>{today}</span>
      <Link className="right" to="/dayschedule">
        Schedule
      </Link>
    </div>
  );
}

export default BackHeader;
