import React, { useContext, useState } from "react";
import { ScheduleContext } from "../../contexts/schedulecontext";

function SubtaskDisplay(props) {
  const { dispatch } = useContext(ScheduleContext);
  const [value, setValue] = useState(props.sub.value);
  return (
    <div className="subtaskdisplay" key={props.sub.stID}>
      <input type="checkbox" className="check" />
      <p>{props.stName}</p>

      {props.sub.stType ? (
        <div>
          <input
            type="number"
            name="indicval"
            onChange={(e) => setValue(e.target.value)}
            value={value ? value : 0}
            min={0}
            max={props.sub.goal}
          />
          <span>/{props.sub.goal}</span>
        </div>
      ) : null}
    </div>
  );
}

export default SubtaskDisplay;
