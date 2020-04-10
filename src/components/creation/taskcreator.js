import React, { useState } from "react";

function TaskCreator() {
  return (
    <React.Fragment>
      <div id="taskcreator">
        <input
          class="tasknameinput taskcreationinput"
          placeholder="Task Name"
          type="text"
        />
        <label for="starttime"></label>
        <input
          class="taskcreationinput timeinput"
          type="time"
          name="starttime"
        />
        <label for="endtime"></label>
        <input class="taskcreationinput timeinput" type="time" name="endtime" />
        <textarea
          cols="28"
          rows="6"
          class="tasknotesinput taskcreationinput"
          placeholder="Task Notes"
        >
          Notes:
        </textarea>
        <div class="sub class input inserter component here"></div>
      </div>
    </React.Fragment>
  );
}

export default TaskCreator;
