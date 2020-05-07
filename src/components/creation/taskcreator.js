import React, { useContext, useState } from "react";
import { ScheduleContext } from "../../contexts/schedulecontext";

function TaskCreator() {
  const { dispatch } = useContext(ScheduleContext);
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
                name="taskName"
                required
              />
              <label id="tasknamelabel" htmlFor="taskName">
                Task Name
              </label>
            </div>
            <div className="double">
              <div>
                <label htmlFor="starttime" className="timeLabel">
                  Start Time
                </label>
                <input
                  className="taskcreationinput timeinput"
                  type="time"
                  name="starttime"
                  onChange={(e) => setStartTime(e.target.value)}
                  value={startTime}
                />
              </div>
              <div>
                <label htmlFor="endtime" className="timeLabel">
                  End Time
                </label>
                <input
                  className="taskcreationinput timeinput"
                  type="time"
                  name="endtime"
                  onChange={(e) => setEndTime(e.target.value)}
                  value={endTime}
                />
              </div>
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

          <input type="submit" value="+" id="creatoradd" />
        </div>
      </form>
    </React.Fragment>
  );
}

export default TaskCreator;
