import React, { useContext } from "react";
import TaskBlock from "../taskblock";
import { ScheduleContext } from "../../contexts/ScheduleContext";
import Task from "../models/taskmodel";

const SchedulePreview = () => {
  // const { tasks } = useContext(ScheduleContext);
  // console.log(tasks);
  const tasks = [
    {
      taskName: "task name",
      pID: 1,
      startTime: "12:34",
      endTime: "14:35",
      isComplete: false,
      taskNotes: "The notes",
      tID: 1,
      subtasks: [],
    },
    {
      taskName: "task name 2",
      pID: 1,
      startTime: "15:34",
      endTime: "16:35",
      isComplete: false,
      taskNotes: "The notes 2",
      tID: 2,
      subtasks: [],
    },
  ];
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
