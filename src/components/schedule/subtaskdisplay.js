import React, { useContext, useState } from "react";
import { ScheduleContext } from "../../contexts/schedulecontext";
import CheckBox from "../checkbox";

function SubtaskDisplay(props) {
  const { dispatch } = useContext(ScheduleContext);
  const [value, setValue] = useState(props.sub.value);
  let classes = "subtaskdisplay" + (props.sub.isComplete ? " finished" : "");
  //Actually Change in Reducer with an edit subtask action
  function flipCheck() {
    dispatch({
      type: "TOGGLE_SUB",
      task: {
        sub: props.sub,
        tID: props.task.tID,
        value: props.sub.isComplete,
      },
    });
    classes = "subtaskdisplay" + (props.sub.isComplete ? " finished" : "");
  }
  return (
    <div className={classes} key={props.sub.stID} key2={props.sub.stID}>
      <CheckBox
        type="checkbox"
        className="check"
        onClick={flipCheck}
        value={props.sub.isComplete}
      ></CheckBox>
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
