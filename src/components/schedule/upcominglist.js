import React, { useContext } from "react";
import TaskBlock from "../taskblock";
import { ScheduleContext } from "../../contexts/ScheduleContext";

function UpcomingList(props) {
  const { tasks } = useContext(ScheduleContext);
  return (
    <div id="upcominglist">
      <h3 className="lightlabel">Upcoming Tasks:</h3>
      <div className="scroll">
        {tasks.map((task) => {
          return (
            <TaskBlock
              startTime={task.startTime}
              endTime={task.endTime}
              taskName={task.taskName}
              tID={task.tID}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UpcomingList;
