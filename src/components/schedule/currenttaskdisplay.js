import React, { useContext, useState, useEffect } from "react";
import SubtaskDisplay from "./subtaskdisplay";
import { ScheduleContext } from "../../contexts/schedulecontext";
import SwipeButton from "../swipebutton";
import { dateConv } from "../scripts/shared";
import { findCIndex } from "../scripts/currenttaskscripts";
const swapTop = () => {
  let list = document.getElementById("upcominglist");
  list.classList.remove("hide");
  let curr = document.getElementById("currentdisplay");
  curr.classList.add("hide");
};

function CurrentDisplay(props) {
  const { tasks, dispatch } = useContext(ScheduleContext);
  let currentIndex = tasks.findIndex(
    (task) =>
      dateConv(task.startTime).setMinutes(
        dateConv(task.startTime).getMinutes() - 1
      ) <= props.time && dateConv(task.endTime) >= props.time
  );
  // const updateCurrentIndex = () => {
  //   now = new Date();
  //   let currentIndexj = {};
  //   currentIndexj = tasks.findIndex(
  //     (task) =>
  //       dateConv(task.startTime.toString()) <= now &&
  //       dateConv(task.endTime.toString()) >= now
  //   );
  //   //the faster interval probably messed things up. Fixx THATTTTT
  //   if (tasks[currentIndexj] && !tasks[currentIndexj].isCurrent) {
  //     dispatch({
  //       type: "MARK_CURRENT",
  //       task: { tID: tasks[currentIndexj].tID },
  //     });
  //   }
  //   //id's etime and stime
  //   let etime = document.getElementById("etime");
  //   let stime = document.getElementById("stime");
  //   if (etime) {
  //     console.log("timeswap");
  //     etime.innerHTML = tasks[currentIndexj]
  //       ? tasks[currentIndexj].endTime.toString()
  //       : "";
  //     stime.innerHTML = tasks[currentIndexj]
  //       ? tasks[currentIndexj].startTime.toString()
  //       : "";
  //   }
  //   return currentIndexj;
  // };

  //const [currentIndex, setCurrentIndex] = useState(updateCurrentIndex());

  const [note, setNote] = useState(
    currentIndex >= 0 ? tasks[currentIndex.taskNotes] : ""
  );

  const updateNote = (change) => {
    setNote(change);
    dispatch({
      type: "EDIT_TASK_NOTE",
      task: {
        note: note,
        ind: currentIndex,
      },
    });
  };
  function markText() {
    let currentName = document.getElementById("currentdisplayname");
    if (currentName.className == "") {
      currentName.className = "finished";
    } else {
      currentName.className = "";
    }
  }
  const toggleTask = (tid) => {
    console.log(tid);
    dispatch({
      type: "TOGGLE_TASK",
      task: {
        tID: tid,
      },
    });
  };
  // useEffect(() => {
  //   setInterval(() => {
  //     setCurrentIndex(updateCurrentIndex());
  //   }, 10000);
  // }, []);
  return (
    <div id="currentdisplay">
      <div id="currenttasktop">
        <ul className="inline">
          <h1
            id="currentdisplayname"
            className={
              tasks[currentIndex]
                ? tasks[currentIndex].isComplete
                  ? "finished"
                  : ""
                : ""
            }
          >
            {tasks[currentIndex] ? tasks[currentIndex].taskName : "Break"}
          </h1>
        </ul>
        {currentIndex >= 0 ? (
          <button
            id="nexttaskbutt"
            onClick={() => {
              markText();
              toggleTask(tasks[currentIndex].tID);

              console.log("toggle clicked");
            }}
          >
            Mark Complete
          </button>
        ) : null}
      </div>
      <div id="currentdiplaysub">
        {currentIndex >= 0
          ? tasks[currentIndex].subtasks
            ? tasks[currentIndex].subtasks.map((subtask) => {
                return (
                  <SubtaskDisplay
                    sub={subtask}
                    key={subtask.stID}
                    stName={subtask.stName}
                    task={tasks[currentIndex]}
                  />
                );
              })
            : null
          : null}
      </div>
      <div id="currentdisplaynotes">
        <textarea
          className="dayNotes fillup"
          defaultValue={
            tasks[currentIndex] ? tasks[currentIndex].taskNotes : "Task Notes:"
          }
          onChange={
            currentIndex >= 0 ? (e) => updateNote(e.target.value) : null
          }
        ></textarea>
      </div>
      <SwipeButton onClick={() => swapTop()} addClass="right" />
    </div>
  );
}
// setInterval(CurrentDisplay(), 1000);
export default CurrentDisplay;
