import React, { useContext } from "react";
import SubtaskDisplay from "./subtaskdisplay";
import { ScheduleContext } from "../../contexts/schedulecontext";

function BooleanList() {
  const { tasks } = useContext(ScheduleContext);
  return (
    <div id="booleanlist" className="scroll">
      <ul>
        {tasks.map((task) => {
          return <SubtaskDisplay stName={task.taskName} key={task.tID} />;
        })}
      </ul>
    </div>
  );
}

export default BooleanList;
