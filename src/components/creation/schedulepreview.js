import React, { useContext } from "react";
import TaskBlock from "../taskblock";
import { ScheduleContext } from "../../contexts/schedulecontext";
import SwipeButton from "../swipebutton";

const SchedulePreview = () => {
  const { tasks } = useContext(ScheduleContext);

  return (
    <div className="schedulepreviewcontainer">
      <div className="schedulepreview">
        <ul id="previewlist">
          {tasks.map((task) => {
            return <TaskBlock task={task} key={task.tID} />;
          })}
        </ul>
      </div>
      <SwipeButton addClass="left" />
    </div>
  );
};

export default SchedulePreview;
