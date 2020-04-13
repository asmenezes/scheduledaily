import React, { useState } from "react";

function TaskCreator() {
  return (
    <React.Fragment>
      <div id="taskcreator">
        <input
          className="tasknameinput taskcreationinput"
          placeholder="Task Name"
          type="text"
        />
        <label for="starttime"></label>
        <input
          className="taskcreationinput timeinput"
          type="time"
          name="starttime"
        />
        <label for="endtime"></label>
        <input
          className="taskcreationinput timeinput"
          type="time"
          name="endtime"
        />
        <textarea cols="28" rows="6" class="tasknotesinput taskcreationinput">
          Notes:
        </textarea>
        <div className="create list of subtasks"></div>
        <div className="creater of subtasks"></div>
      </div>
    </React.Fragment>
  );
}

export default TaskCreator;
