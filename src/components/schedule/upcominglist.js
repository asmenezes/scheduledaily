import React, { useState } from "react";
import TaskBlock from "../taskblock";

function UpcomingList() {
  return (
    <div id="upcominglist">
      <h3 className="lightlabel">Upcoming Tasks:</h3>
      <div className="scroll">
        <TaskBlock
          starttime={"12:43"}
          endtime={"14:53"}
          taskname={"Do this task"}
        />
      </div>
    </div>
  );
}

export default UpcomingList;
