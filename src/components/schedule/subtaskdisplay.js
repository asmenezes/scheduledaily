import React, { useContext, useState } from "react";
import { ScheduleContext } from "../../contexts/schedulecontext";

function SubtaskDisplay(props) {
  const { dispatch } = useContext(ScheduleContext);
  const [value, setValue] = useState(props.sub.value);
  //Actually Change in Reducer with an edit subtask action
  function flipCheck() {
    let query = "[key2='" + props.sub.stID + "']";
    let thisone = document.querySelector(query);
    if (thisone) {
      if (!thisone.classList.contains("finished")) {
        thisone.classList.add("finished");
        //Finish subtask in reducer
      } else {
        thisone.classList.remove("finished");
        //unfinish subtask in reducer
      }
    }
  }
  return (
    <div className="subtaskdisplay" key={props.sub.stID} key2={props.sub.stID}>
      <input type="checkbox" className="check" onChange={flipCheck} />
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
