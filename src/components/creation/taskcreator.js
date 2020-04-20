import React, { useState } from "react";

function TaskCreator() {
  return (
    <React.Fragment>
      <div id="taskcreator">
        <div className="lineup">
          <div>
            <input
              className="tasknameinput taskcreationinput"
              placeholder="Task Name"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="starttime"></label>
            <input
              className="taskcreationinput timeinput"
              type="time"
              name="starttime"
            />
            <label htmlFor="endtime"></label>
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
          <div className="secondpart">
            <label className="switch" id="typeselector">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            indicator
          </div>
        </div>
        <textarea
          cols="28"
          rows="5"
          className="tasknotesinput taskcreationinput"
          defaultValue="Notes: "
        ></textarea>
        <div></div>
      </div>
    </React.Fragment>
  );
}

export default TaskCreator;
