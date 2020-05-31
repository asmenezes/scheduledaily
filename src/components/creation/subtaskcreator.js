import React, { useContext, useState } from "react";
import { ScheduleContext } from "../../contexts/schedulecontext";

function SubtaskPreview(props) {
  const { dispatch } = useContext(ScheduleContext);
  const [name, setName] = useState(props.subtask.stName);
  const [indic, setIndic] = useState(props.subtask.stType);
  const [indicVal, setIndicVal] = useState(props.ind);
  return (
    <div className="subtaskpreview">
      <div className="creater of subtasks">
        <input
          className="subtasknameinput taskcreationinput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />

        <label className="switch" id="typeselector">
          <input
            type="checkbox"
            name="indication"
            onChange={(e) => setIndic(!indic)}
            className="check"
          />
          <span className="slider"></span>
        </label>
        {indic ? (
          <input
            type="number"
            name="indicval"
            onChange={(e) => setIndicVal(e.target.value)}
            value={indicVal}
            min={1}
            max={999}
          />
        ) : (
          <input type="checkbox" name="indicval" unchecked="true" />
        )}
        <span
          className="stSub"
          onClick={() =>
            dispatch({ type: "REMOVE_SUB", stID: props.subtask.stID })
          }
        >
          -
        </span>
      </div>
    </div>
  );
}
//on change edit subtask in scheduleReducer
export default SubtaskPreview;
