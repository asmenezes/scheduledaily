import React, {useState} from "react";

function TaskBlock() {
  return <div className= "taskblock">
    <button className = "deletebutton">x</button>
    <p className = "taskname">TaskName</p>
    <div className = "time">
    <p className = "stime">StartTime</p>
    <p>EndTime</p>
    </div>
    <div className = "subtask"><span>SubTasks</span></div>
  </div>;
}

export default TaskBlock;
