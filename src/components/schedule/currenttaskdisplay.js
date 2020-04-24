import React, { useContext } from "react";
import SubtaskDisplay from "./subtaskdisplay";

function CurrentDisplay(props) {
  return (
    <div id="currentdisplay">
      <div id="currenttasktop">
        <h1 id="currentdisplayname">
          {props.task.taskName ? props.task.taskName : "Break"}
        </h1>
        <button id="nexttaskbutt">Next Task</button>
      </div>
      <div id="currentdiplaysub">
        {props.task.subtasks ? (
          props.task.subtasks.map((subtask) => {
            return <SubtaskDisplay stName={subtask.stName} />;
          })
        ) : (
          <div></div>
        )}
      </div>
      <div id="currentdisplaynotes">
        <textarea className="dayNotes fillup">{props.task.taskNotes}</textarea>
      </div>
    </div>
  );
}

export default CurrentDisplay;
