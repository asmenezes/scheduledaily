import React, { useContext } from "react";
import { ScheduleContext } from "../contexts/schedulecontext";

function TaskBlock(props) {
  const { dispatch } = useContext(ScheduleContext);
  const task = props.task;
  console.log(`key is ${task.tID}`);

  return task ? (
    <div className="taskblock">
      <button
        className="deletebutton"
        onClick={() => dispatch({ type: "REMOVE_TASK", tID: task.tID })}
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
