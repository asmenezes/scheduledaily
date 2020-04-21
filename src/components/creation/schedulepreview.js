import React, { useContext } from "react";
import TaskBlock from "../taskblock";
import { ScheduleContext } from "../../contexts/ScheduleContext";
import Task from "../models/taskmodel";

const SchedulePreview = () => {
  const { tasks } = useContext(ScheduleContext);
  return tasks.length ? (
    <React.Fragment>
      <div className="schedulepreviewcontainer">
        <div className="schedulepreview">
          {tasks.map((task) => {
            return (
              <TaskBlock
                taskName={task.taskName}
                startTime={task.startTime}
                endTime={task.endTime}
                tID={task.tID}
                key={task.tID}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <div className="schedulepreviewcontainer">
        <div className="schedulepreview"></div>
      </div>
    </React.Fragment>
  );
};

export default SchedulePreview;
