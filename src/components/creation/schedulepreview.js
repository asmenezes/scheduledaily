import React, { useContext } from "react";
import TaskBlock from "../taskblock";
import ScheduleContextProvider, {
  ScheduleContext,
} from "../../contexts/schedulecontext";
// import Task from "../models/taskmodel";

const SchedulePreview = () => {
  const { tasks } = useContext(ScheduleContext);
  console.log(tasks);

  return (
    <ScheduleContextProvider>
      <div className="schedulepreviewcontainer">
        <div className="schedulepreview">
          {tasks.map((task) => {
            return <TaskBlock task={task} key={task.tID} />;
          })}
        </div>
      </div>
    </ScheduleContextProvider>
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
