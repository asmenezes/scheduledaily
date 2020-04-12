import React, { useState } from "react";

function SubTaskCreator() {
  return (
    <React.Fragment>
      <div id="taskcreator">
        <input
          class="subtasknameinput taskcreationinput"
          placeholder="Subtask Name"
          type="text"
        />
        <input class="toggle" type="toggle" />
        <input class="numberinput" type="number" />
      </div>
    </React.Fragment>
  );
}

export default TaskCreator;
