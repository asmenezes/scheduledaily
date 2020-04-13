import React, { useState } from "react";

function TaskCreator() {
  return (
    <React.Fragment>
      <div id="taskcreator">
        <div class="lineup">
          <div>
            <input
              className="tasknameinput taskcreationinput"
              placeholder="Task Name"
              type="text"
            />
          </div>
          <div>
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
          </div>
          <div>
            <div className="create list of subtasks"></div>
            <div className="creater of subtasks">
              <input
                className="subtasknameinput taskcreationinput"
                placeholder="Subtask Name"
                type="text"
              />
            </div>
          </div>
        </div>
        <textarea cols="28" rows="6" class="tasknotesinput taskcreationinput">
          Notes:
        </textarea>
        <div></div>
      </div>
    </React.Fragment>
  );
}

export default TaskCreator;
