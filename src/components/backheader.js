import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function BackHeader() {
  let today = new Date();
  today = today.toDateString();
  return (
    <div class="backheader">
      <span>{today}</span>
      <Link className="right" to="/schedule">
        Schedule
      </Link>
    </div>
  );
}

export default BackHeader;

// <a className="right" href="/schedule">
//
//   Schedule
// </a>
