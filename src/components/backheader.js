import React, {useState} from "react";

function BackHeader() {
  let today = new Date();
  today = today.toDateString();
  return (
    <React.Fragment>
      <div class="backheader">
        <span>{today}</span>
        <a className="right" href="/schedule">Schedule</a>
      </div>
    </React.Fragment>
  );
}

export default BackHeader;
