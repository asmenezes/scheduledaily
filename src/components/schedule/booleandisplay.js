import React, { useContext } from "react";
import { BooleanContext } from "../../contexts/booleancontext";
import CheckBox from "../checkbox";

function BooleanDisplay(props) {
  const { boolsDispatch } = useContext(BooleanContext);
  let classes = "subtaskdisplay" + (props.bool.isComplete ? " finished" : "");

  function flipCheck() {
    boolsDispatch({
      type: "TOGGLE_BOOL",
      bool: {
        bool: props.bool,
        value: props.bool.isComplete,
      },
    });
    classes = "subtaskdisplay" + (props.bool.isComplete ? " finished" : "");
  }
  return (
    <div className={classes} key={props.bID} key2={props.bID}>
      <CheckBox
        type="checkbox"
        className="check"
        onClick={flipCheck}
        value={props.bool.isComplete}
      ></CheckBox>
      <p className="selectionname">{props.bName}</p>
    </div>
  );
}

export default BooleanDisplay;
