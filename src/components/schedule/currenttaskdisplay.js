import React, { useState } from "react";
import SubtaskDisplay from "./subtaskdisplay";

function CurrentDisplay() {
  return (
    <div id="currentdisplay">
      <div id="currenttasktop">
        <h1 id="currentdisplayname"> CurrentTask </h1>
        <button id="nexttaskbutt">Next Task</button>
      </div>
      <div id="currentdiplaysub">
        <SubtaskDisplay />
        <SubtaskDisplay />
        <SubtaskDisplay />
        <SubtaskDisplay />
      </div>
      <div id="currentdisplaynotes">
        <textarea className="dayNotes fillup">Task Notes:</textarea>{" "}
      </div>
    </div>
  );
}

export default CurrentDisplay;
