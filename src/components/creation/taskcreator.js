import React, { useEffect, useContext, useState } from "react";
import { ScheduleContext } from "../../contexts/ScheduleContext";

function TaskCreator(props) {
  const { tasks, dispatch } = useContext(ScheduleContext);
  const [taskName, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [taskNotes, setNotes] = useState("");
  const [subtasks, setSubtasks] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TASK",
      task: {
        taskName,
        startTime,
        endTime,
        taskNotes,
        subtasks,
      },
    });
    setName("");
    setStartTime("");
    setEndTime("");
    setNotes("Notes: ");
    setSubtasks([]);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div id="taskcreator">
          <div className="lineup">
            <div>
              <input
                className="tasknameinput taskcreationinput"
                placeholder="Task Name"
                type="text"
                value={taskName}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="starttime"></label>
              <input
                className="taskcreationinput timeinput"
                type="time"
                name="starttime"
                onChange={(e) => setStartTime(e.target.value)}
                value={startTime}
              />
              <label htmlFor="endtime"></label>
              <input
                className="taskcreationinput timeinput"
                type="time"
                name="endtime"
                onChange={(e) => setEndTime(e.target.value)}
                value={endTime}
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
            onChange={(e) => setNotes(e.target.value)}
            value={taskNotes}
          ></textarea>
          <div>
            <input type="submit" value="Add" />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default TaskCreator;
