import React, { useState } from "react";
import TaskBlock from "../taskblock";

function UpcomingList(props) {
  return (
    <div id="upcominglist">
      <h3 className="lightlabel">Upcoming Tasks:</h3>
      <div className="scroll">
        {props.tasks.map((task) => {
          return (
            <TaskBlock
              startTime={task.startTime}
              endTime={task.endTime}
              taskName={task.taskName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UpcomingList;
