import React, {useState} from "react";

function TaskCreator() {
  return (
    <React.Fragment>
      <div id="taskcreator">
        <input
          class="tasknameinput taskcreationinput"
          placeholder="Task Name"
          type="text"
        />
        <div class="sub class input inserter component here"></div>
      </div>
    </React.Fragment>
  );
}

export default TaskCreator;
