import React, {useState} from "react";

function TaskBlock(props) {
  return <div className= "taskblock">
    <button className = "deletebutton">x</button>
    <p className = "taskname">{props.taskname}</p>
    <div className = "time">
    <p className = "stime">{props.starttime}</p>
    <p>{props.endtime}</p>
    </div>
    <div className = "subtask"><span>SubTasks</span></div>
  </div>;
}

export default TaskBlock;
