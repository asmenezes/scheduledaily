import React, { useContext, useEffect } from "react";
import TaskBlock from "../taskblock";
import ScheduleContextProvider, {
  ScheduleContext,
} from "../../contexts/ScheduleContext";
import Task from "../models/taskmodel";

const SchedulePreview = () => {
  const { tasks } = useContext(ScheduleContext);
  console.log(tasks);

  return tasks.length ? (
    <React.Fragment>
      <ScheduleContextProvider>
        <div className="schedulepreviewcontainer">
          <div className="schedulepreview">
            {tasks.map((task) => {
              console.log(task.tID);
              return (
                <TaskBlock
                  task={task}
                  tID={task.tID}
                  tasks={tasks}
                  key={task.tID}
                />
              );
            })}
          </div>
        </div>
      </ScheduleContextProvider>
    </React.Fragment>
  ) : (
    <div className="schedulepreviewcontainer">
      <div className="schedulepreview"></div>
    </div>
  );
};
// {tasks.length ? (
//   tasks.map((task) => {
//     return <TaskBlock tID={task.tID} key={task.tID} />;
//   })
// ) : (
//   <div></div>
// )}
export default SchedulePreview;
