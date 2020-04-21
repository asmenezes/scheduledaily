import React, { useState } from "react";

function TaskBlock(props) {
  return (
    <div className="taskblock">
      <button className="deletebutton">x</button>
      <p className="taskname">{props.taskName}</p>
      <div className="time">
        <p className="stime">{props.startTime}</p>
        <p>{props.endTime}</p>
      </div>
      <div className="subtask">
        <span>SubTasks</span>
      </div>
    </div>
  );
}

export default TaskBlock;
