import React, {useState} from "react";

function BackHeader() {
  let today = new Date();
  today = today.toDateString();
  return (
    <React.Fragment>
      <div class="backheader">
        <span>{today}</span>
        <span class="right">Schedule</span>
      </div>
    </React.Fragment>
  );
}

export default BackHeader;
