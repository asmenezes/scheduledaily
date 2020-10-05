import React, { useContext } from "react";
import TaskBlock from "../taskblock";
import { ScheduleContext } from "../../contexts/schedulecontext";
import { dateConv } from "../scripts/shared";
import SwipeButton from "../swipebutton";

function UpcomingList() {
  let now = new Date();
  const { tasks } = useContext(ScheduleContext);
  const unswapTop = () => {
    let list = document.getElementById("upcominglist");
    list.classList.add("hide");
    let curr = document.getElementById("currentdisplay");
    curr.classList.remove("hide");
  };
  return (
    <div id="upcominglist" className="scroll">
      <h3 className="lightlabel">Coming Up:</h3>
      {tasks[0] ? (
        <ul className="scroll">
          {tasks.map((task) => {
            return dateConv(task.startTime.toString()) > now ? (
              <TaskBlock task={task} key={task.tID} />
            ) : null;
          })}
        </ul>
      ) : null}
      <SwipeButton addClass="left upswipebutt" onClick={() => unswapTop()} />
    </div>
  );
}

export default UpcomingList;
