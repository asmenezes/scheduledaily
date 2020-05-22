import React, { useContext } from "react";
import TaskBlock from "../taskblock";
import { ScheduleContext } from "../../contexts/schedulecontext";

function UpcomingList() {
  const { tasks } = useContext(ScheduleContext);
  return (
    <div id="upcominglist" className="scroll">
      <h3 className="lightlabel">Coming Up:</h3>
      {tasks[0] ? (
        <ul className="scroll">
          {
            // if task.startTime is more than now's time show it
          }
          {tasks.map((task) => {
            return <TaskBlock task={task} key={task.tID} />;
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default UpcomingList;
