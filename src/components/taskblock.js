import React, { useContext } from "react";
import { ScheduleContext } from "../contexts/ScheduleContext";

function TaskBlock({ task, tasks }, props) {
  const { dispatch } = useContext(ScheduleContext);
  console.log(`key is ${task.tID}`);
  const task2 = tasks.find((task1) => task1.tID === task.tID);

  return task ? (
    <div className="taskblock">
      <button
        className="deletebutton"
        onClick={() => dispatch({ type: "REMOVE_TASK", tID: task2.tID })}
      >
        x
      </button>
      <p className="taskname">{task.taskName}</p>
      <div className="time">
        <p className="stime">{task.startTime}</p>
        <p>{task.endTime}</p>
      </div>
      <div className="subtask">
        <span>SubTasks</span>
      </div>
    </div>
  ) : null;
}

export default TaskBlock;
