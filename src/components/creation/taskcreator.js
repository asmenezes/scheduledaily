import React, { useContext, useState } from "react";
import { ScheduleContext } from "../../contexts/schedulecontext";

function TaskCreator() {
  const { dispatch } = useContext(ScheduleContext);
  const [taskName, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [taskNotes, setNotes] = useState("");
  const [subtasks, setSubtasks] = useState("");
  const [indic, setIndic] = useState(false);
  const [indicVal, setIndicVal] = useState(2);
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
    setIndic(false);
    setIndicVal(2);
  };
  //hh%3Amm <- time format
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
                  pattern="[0-9]{2}:[0-9]{2}"
                  required
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
                  pattern="[0-9]{2}:[0-9]{2}"
                  min={startTime}
                  required
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
                <input
                  type="checkbox"
                  name="indication"
                  onChange={(e) => setIndic(!indic)}
                  className="check"
                />
                <span className="slider"></span>
              </label>
              {indic ? (
                <input
                  type="number"
                  name="indicval"
                  onChange={(e) => setIndicVal(e.target.value)}
                  value={indicVal}
                />
              ) : (
                <input type="checkbox" name="indicval" unchecked />
              )}
              <span> {indic} </span>
              {
                //Checkbox : number input -----value is indic value, this should all go in subtask creator anyways
              }
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
