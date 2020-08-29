import React, { useContext } from "react";
import TaskBlock from "../taskblock";
import { ScheduleContext } from "../../contexts/schedulecontext";
import SwipeButton from "../swipebutton";

const SchedulePreview = (e) => {
  const { tasks } = useContext(ScheduleContext);
  const revealSidebar = (a) => {
    let bar = document.getElementById("creationsidebar");
    bar.classList.remove("hide");
    bar.style.display = "block";
    a.target.parentNode.classList.add("hide");
  };
  return (
    <div className="schedulepreviewcontainer">
      <div className="schedulepreview">
        <ul id="previewlist">
          {tasks.map((task) => {
            return <TaskBlock task={task} key={task.tID} />;
          })}
        </ul>
      </div>
      <SwipeButton
        id="schedPreSB"
        addClass="left"
        onClick={(a) => revealSidebar(a)}
      />
    </div>
  );
};

export default SchedulePreview;
