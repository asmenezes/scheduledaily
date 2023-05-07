import React, { useContext } from "react";
import { ScheduleContext } from "../contexts/schedulecontext";
import { disp12Time } from "./scripts/shared";

function TaskBlock({ task }) {
  const { dispatch } = useContext(ScheduleContext);
  return task ? (
    <div className="taskblock">
      <button
        className="deletebutton"
        onClick={() =>
          dispatch({ type: "REMOVE_TASK", task: { tID: task.tID } })
        }
      >
        x
      </button>
      <p className="taskname">{task.taskName}</p>
      <div className="time">
        <p className="stime">{disp12Time(task.startTime)}</p>
        <p>{disp12Time(task.endTime)}</p>
      </div>
      {task.subtasks[0] ? (
        <div className="subtask">
          <ul className="subBarList">
            <span className="subBar" key={task.tID}>
              {task.subtasks.map((st) => {
                return (
                  <span
                    className="subBarName"
                    key={st.stID}
                  >
                    {st.stName}
                    {"\t"}
                  </span>
                );
              })}
            </span>
          </ul>
        </div>
      ) : null}
    </div>
  ) : null;
}

export default TaskBlock;
