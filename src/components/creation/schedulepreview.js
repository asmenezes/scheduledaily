import React, { useContext } from "react";
import TaskBlock from "../taskblock";
import { ScheduleContext } from "../../contexts/schedulecontext";
import SwipeButton from "../swipebutton";

const SchedulePreview = (e) => {
  const { tasks } = useContext(ScheduleContext);
  const revealSidebar = (a) => {
    let bar = document.getElementById("creationsidebar");
    let upbutt = document.getElementById("createrReveal");
    bar.classList.remove("hide");
    bar.style.display = "block";
    a.target.parentNode.classList.add("hide");
    upbutt.classList.add("hide");
  };
  if(tasks[0] == null){
    return(<div className="schedulepreviewcontainer">
    <div className="onBox">
    <h1 className="onHead">The Tasks You Create Below Will Show Up Here,<br/>You Can Delete Them Later If You Change Your Mind.</h1>
    </div>
    </div>);
  }else{
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
        addClass="left sp"
        onClick={(a) => revealSidebar(a)}
      />
    </div>
  );
};
}
export default SchedulePreview;
