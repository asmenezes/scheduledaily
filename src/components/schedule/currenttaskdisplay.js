import React, { useContext } from "react";
import SubtaskDisplay from "./subtaskdisplay";
import { ScheduleContext } from "../../contexts/schedulecontext";

function CurrentDisplay() {
  const { tasks } = useContext(ScheduleContext);
  return (
    <div id="currentdisplay">
      <div id="currenttasktop">
        <h1 id="currentdisplayname">
          {tasks[0] ? tasks[0].taskName : "Break"}
        </h1>
        <button id="nexttaskbutt">Next Task</button>
      </div>
      <div id="currentdiplaysub">
        {tasks[0] ? (
          tasks[0].subtasks.map((subtask) => {
            return <SubtaskDisplay stName={subtask.stName} />;
          })
        ) : (
          <div></div>
        )}
      </div>
      <div id="currentdisplaynotes">
        <textarea
          className="dayNotes fillup"
          defaultValue={tasks[0] ? tasks[0].taskNotes : "Day Notes:"}
        ></textarea>
      </div>
    </div>
  );
}

export default CurrentDisplay;
