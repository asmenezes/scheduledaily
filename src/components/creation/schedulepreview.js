import React, { useContext, useEffect } from "react";
import TaskBlock from "../taskblock";
import ScheduleContextProvider, {
  ScheduleContext,
} from "../../contexts/ScheduleContext";
import Task from "../models/taskmodel";

const SchedulePreview = (props) => {
  const { tasks } = useContext(ScheduleContext);
  console.log(tasks);

  return (
    <React.Fragment>
      <div className="schedulepreviewcontainer">
        <ScheduleContextProvider value={tasks}>
          <div className="schedulepreview">
            {tasks.length
              ? tasks.map((task) => {
                  return <TaskBlock tID={task.tID} key={task.tID} />;
                })
              : null}
          </div>
        </ScheduleContextProvider>
      </div>
    </React.Fragment>
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
