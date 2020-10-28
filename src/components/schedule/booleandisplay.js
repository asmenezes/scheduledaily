import React, { useContext, useState } from "react";
import { BooleanContext } from "../../contexts/booleancontext";

function BooleanDisplay(props) {
  const { boolsDispatch } = useContext(BooleanContext);
  let classes = "subtaskdisplay" + (props.bool.isComplete ? " finished" : "");

  function flipCheck() {
    boolsDispatch({
      type: "TOGGLE_BOOL",
      bool: {
        bool: props.bool,
      },
    });
  }
  return (
    <div className={classes} key={props.bID} key2={props.bID}>
      <input type="checkbox" className="check" onChange={flipCheck} />
      <p>{props.bName}</p>
    </div>
  );
}

export default BooleanDisplay;
