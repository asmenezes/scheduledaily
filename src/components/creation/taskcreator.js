import React, { useContext, useState, useEffect } from "react";
import { ScheduleContext } from "../../contexts/schedulecontext";
import SubtaskPreview from "./subtaskcreator";
import SwipeButton from "../swipebutton";
import CheckBox from "../checkbox";

function TaskCreator() {
  const { dispatch } = useContext(ScheduleContext);
  const [taskName, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [taskNotes, setNotes] = useState("");
  const [subtasks, setSubtasks] = useState("");
  const [stName, setstName] = useState("");
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
    setSubtasks("");
    setIndic(false);
    setIndicVal(2);
    setstName("");
  };
  function hider(x) {
    let thisOne = document.getElementsByClassName(
      "tasknotesinput taskcreationinput"
    );
    let thistwo = document.getElementsByClassName("creater");

    let thisthree = document.getElementsByClassName("secondpart");
    let thisone = [...thisOne, ...thistwo, ...thisthree];
    if (x.matches) {
      for (let i = 0; i < thisone.length; i++) {
        //console.log(thisone[i]);
        if (!thisone[i].classList.contains("hide")) {
          thisone[i].classList.add("hide");
          //Finish subtask in reducer
        } else {
          //thisone[i].classList.remove("hide");
          //unfinish subtask in reducer
        }
      }
    } else {
      for (let i = 0; i < thisone.length; i++) {
        //console.log(thisone[i]);
        if (thisone[i].classList.contains("hide")) {
          thisone[i].classList.remove("hide");
          //Finish subtask in reducer
        }
      }
    }
  }
  const revealCreator = (a) => {
    let thisOne = document.getElementsByClassName(
      "tasknotesinput taskcreationinput"
    );
    let thistwo = document.getElementsByClassName("creater");

    let thisthree = document.getElementsByClassName("secondpart");
    let thisone = [...thisOne, ...thistwo, ...thisthree];
    if (x.matches && thisone[0].classList.contains("hide")) {
      for (let i = 0; i < thisone.length; i++) {
        //  console.log(thisone[i]);
        if (thisone[i].classList.contains("hide")) {
          thisone[i].classList.remove("hide");
          //Finish subtask in reducer
        } else {
          //thisone[i].classList.remove("hide");
          //unfinish subtask in reducer
        }
      }
    } else {
      for (let i = 0; i < thisone.length; i++) {
        //console.log(thisone[i]);
        if (!thisone[i].classList.contains("hide")) {
          thisone[i].classList.add("hide");
          //Finish subtask in reducer
        }
      }
    }
  };
  let x = window.matchMedia("(max-width: 720px)");
  // Call listener function at run time
  x.addListener(hider);
  useEffect(() => {
    hider(x);
  }, []);
  const addST = (e) => {
    setSubtasks([
      ...subtasks,
      {
        stName,
        stType: indic,
        goal: indicVal,
        stID: Math.floor(Math.random() * 900000),
        value: 0,
        isComplete: false,
      },
    ]);
    setIndic(false);
    setIndicVal(2);
    setstName("");
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
            <div id="timeinput" className="double">
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
            <div className="stlist">
              {subtasks[0] ? (
                <ul>
                  {subtasks.map((sub) => {
                    return (
                      <SubtaskPreview
                        stName={sub.stName}
                        key={sub.stID}
                        subtask={sub}
                      />
                    );
                  })}
                </ul>
              ) : null}
            </div>

            <input
              className="subtasknameinput taskcreationinput creater"
              placeholder="Subtask Name"
              type="text"
              onChange={(e) => setstName(e.target.value)}
              value={stName}
            />

            <div className="secondpart">
              <label className="switch" id="typeselector">
                <input
                  type="checkbox"
                  name="indication"
                  onChange={(e) => setIndic(!indic)}
                  className="check"
                  checked={indic}
                />
                <span className="slider"></span>
              </label>
              {indic ? (
                <input
                  type="number"
                  name="indicval"
                  onChange={(e) => setIndicVal(e.target.value)}
                  value={indicVal}
                  min={1}
                  max={999}
                />
              ) : (
                <CheckBox
                  type="checkbox"
                  className="check"
                  onClick={() => true}
                  value={false}
                ></CheckBox>
              )}
              <span onClick={addST} className="stSub">
                +
              </span>
            </div>
          </div>
          <textarea
            onLoad={() => hider(window.matchMedia("(max-width: 860px)"))}
            cols="28"
            rows="5"
            className="tasknotesinput taskcreationinput"
            onChange={(e) => setNotes(e.target.value)}
            value={taskNotes}
          ></textarea>

          <input type="submit" value="+" id="creatoradd" />
        </div>
      </form>
      <SwipeButton
        id="createrReveal"
        addClass="mid"
        onClick={(a) => revealCreator(a)}
      ></SwipeButton>
    </React.Fragment>
  );
}

export default TaskCreator;
