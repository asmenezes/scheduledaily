import React, { useContext, useEffect } from "react";
import TaskBlock from "../taskblock";
import ScheduleContextProvider, {
  ScheduleContext,
} from "../../contexts/schedulecontext";

const SchedulePreview = () => {
  const { tasks } = useContext(ScheduleContext);
  console.log(tasks);

  return (
    <div className="schedulepreviewcontainer">
      <div className="schedulepreview">
        <ul>
          {tasks.map((task) => {
            return <TaskBlock task={task} key={task.tID} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default SchedulePreview;
