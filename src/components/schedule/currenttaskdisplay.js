import React, { useContext, useState } from "react";
import SubtaskDisplay from "./subtaskdisplay";
import { ScheduleContext } from "../../contexts/schedulecontext";
import { dateConv } from "../scripts/shared";

function CurrentDisplay() {
  const { tasks, dispatch } = useContext(ScheduleContext);

  let now = new Date();

  let currentIndex = tasks.findIndex(
    (task) =>
      dateConv(task.startTime.toString()) <= now &&
      dateConv(task.endTime.toString()) >= now
  );
  const [note, setNote] = useState(
    currentIndex >= 0 ? tasks[currentIndex.taskNotes] : ""
  );

  const updateNote = (change) => {
    setNote(change);
    dispatch({
      type: "EDIT_TASK_NOTE",
      task: {
        note: note,
        ind: currentIndex,
      },
    });
  };
  return (
    <div id="currentdisplay">
      <div id="currenttasktop">
        <ul className="inline">
          <h1 id="currentdisplayname">
            {currentIndex >= 0 ? tasks[currentIndex].taskName : "Break"}
          </h1>
        </ul>
        <button id="nexttaskbutt">Next Task</button>
      </div>
      <div id="currentdiplaysub">
        {currentIndex >= 0
          ? tasks[currentIndex].subtasks
            ? tasks[currentIndex].subtasks.map((subtask) => {
                return (
                  <SubtaskDisplay
                    sub={subtask}
                    key={subtask.stID}
                    stName={subtask.stName}
                  />
                );
              })
            : null
          : null}
      </div>
      <div id="currentdisplaynotes">
        <textarea
          className="dayNotes fillup"
          defaultValue={
            currentIndex >= 0 ? tasks[currentIndex].taskNotes : "Task Notes:"
          }
          onChange={
            currentIndex >= 0 ? (e) => updateNote(e.target.value) : null
          }
        ></textarea>
      </div>
    </div>
  );
}

export default CurrentDisplay;
