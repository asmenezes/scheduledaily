import React, { useContext, useState, useEffect } from "react";
import SubtaskDisplay from "./subtaskdisplay";
import { ScheduleContext } from "../../contexts/schedulecontext";
import SwipeButton from "../swipebutton";
import { dateConv, now } from "../scripts/shared";
import { findCIndex } from "../scripts/currenttaskscripts";
const swapTop = () => {
  let list = document.getElementById("upcominglist");
  list.classList.remove("hide");
  let curr = document.getElementById("currentdisplay");
  curr.classList.add("hide");
};

function CurrentDisplay() {
  const { tasks, dispatch } = useContext(ScheduleContext);

  const updateCurrentIndex = () => {
    now = new Date();
    let currentIndexj = {};
    currentIndexj = tasks.findIndex(
      (task) =>
        dateConv(task.startTime.toString()) <= now &&
        dateConv(task.endTime.toString()) >= now
    );
    console.log(tasks[currentIndexj]);
    if (tasks[currentIndexj] && !tasks[currentIndexj].isCurrent) {
      dispatch({
        type: "MARK_CURRENT",
        task: { tID: tasks[currentIndexj].tID },
      });
    }
    return currentIndexj;
  };

  //let currentIndex = findCIndex(tasks);
  const [currentIndex, setCurrentIndex] = useState(updateCurrentIndex());
  // let now2 = [{ start: 1 }];
  // function findNextStart() {
  //   let x = tasks.findIndex(
  //     (task) => dateConv(task.startTime.toString()) >= now
  //   );
  //   //set timeout here to figure out when to load next task
  //   setInterval(() => {
  //     now2 = [...now2, { start: 3 }];
  //     console.log("b");
  //     currentIndex = findCIndex(tasks);
  //   }, 30000);
  //   return x;
  // }
  //
  // let nextStart = findNextStart();
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
  useEffect(() => {
    setInterval(() => {
      setCurrentIndex(updateCurrentIndex());
    }, 10000);
  }, []);
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
            currentIndex >= 0 ? tasks[currentIndex].taskNotes : "Task Notes:"
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
