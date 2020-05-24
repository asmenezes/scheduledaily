import React, { useContext } from "react";
import TaskBlock from "../taskblock";
import { ScheduleContext } from "../../contexts/schedulecontext";
import { dateConv } from "../scripts/shared";

function UpcomingList() {
  let now = new Date();
  const { tasks } = useContext(ScheduleContext);
  return (
    <div id="upcominglist" className="scroll">
      <h3 className="lightlabel">Coming Up:</h3>
      {tasks[0] ? (
        <ul className="scroll">
          {tasks.map((task) => {
            return dateConv(task.endTime.toString()) > now ? (
              <TaskBlock task={task} key={task.tID} />
            ) : null;
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default UpcomingList;
