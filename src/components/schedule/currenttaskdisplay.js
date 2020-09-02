import React, { useContext, useState, useEffect } from "react";
import SubtaskDisplay from "./subtaskdisplay";
import { ScheduleContext } from "../../contexts/schedulecontext";
import SwipeButton from "../swipebutton";
import { dateConv, now } from "../scripts/shared";
import { currentIndex } from "../scripts/currenttaskscripts";
const swapTop = () => {
  let list = document.getElementById("upcominglist");
  list.classList.remove("hide");
  let curr = document.getElementById("currentdisplay");
  curr.classList.add("hide");
};
function CurrentDisplay() {
  const { tasks, dispatch } = useContext(ScheduleContext);

  function findCurrentIndex() {
    return tasks.findIndex(
      (task) =>
        dateConv(task.startTime.toString()) <= now &&
        dateConv(task.endTime.toString()) >= now
    );
  }
  let currentIndex = findCurrentIndex();
  let now2 = [{ start: 1 }];
  function findNextStart() {
    let x = tasks.findIndex(
      (task) => dateConv(task.startTime.toString()) >= now
    );
    //set timeout here to figure out when to load next task
    setInterval(() => {
      now2 = [...now2, { start: 3 }];
      console.log("b");
      currentIndex = findCurrentIndex();
    }, 30000);
    return x;
  }

  let nextStart = findNextStart();
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
    currentIndex = findCurrentIndex();
    nextStart = findNextStart();
    console.log("in effect" + now);
  }, [now2]);
  return (
    <div id="currentdisplay">
      <div id="currenttasktop">
        <ul className="inline">
          <h1 id="currentdisplayname" className="">
            {currentIndex >= 0 ? tasks[currentIndex].taskName : "Break"}
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

export default CurrentDisplay;
