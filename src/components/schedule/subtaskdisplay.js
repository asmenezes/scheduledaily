import React, { useContext, useState } from "react";
import { ScheduleContext } from "../../contexts/schedulecontext";
import CheckBox from "../checkbox";

function SubtaskDisplay(props) {
  const { dispatch } = useContext(ScheduleContext);
  const [value, setValue] = useState(props.sub.value);
  let classes = "subtaskdisplay" + (props.sub.isComplete ? " finished" : "");
  //Actually Change in Reducer with an edit subtask action
  function setCurValue(e){
    setValue(e);
    console.log(value);
    console.log(e);
    dispatch(
      {
        type: "CHANGE_SUB_VALUE",
        task: {
          value: e,
          tID: props.task.tID,
          sub: props.sub,
        },
      }
    )
  }
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
      <p className="stdName">{props.stName}</p>

      {props.sub.stType ? (
        <div>
          <input
            className="stCountIn"
            type="number"
            name="indicval"
            onChange={(e) => setCurValue(e.target.value)}
            value={value >= 0 ? value : 0}
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
