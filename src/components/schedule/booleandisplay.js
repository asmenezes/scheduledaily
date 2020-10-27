import React, { useContext, useState } from "react";
import { BooleanContext } from "../../contexts/booleancontext";

function BooleanDisplay(props) {
  const { dispatch } = useContext(BooleanContext);

  function flipCheck() {
    let query = "[key2='" + props.bID + "']";
    let thisone = document.querySelector(query);
    if (thisone) {
      if (!thisone.classList.contains("finished")) {
        thisone.classList.add("finished");
        //Finish Boolean in reducer
      } else {
        thisone.classList.remove("finished");
        //unfinish Boolean in reducer
      }
    }
  }
  return (
    <div className="subtaskdisplay" key={props.bID} key2={props.bID}>
      <input type="checkbox" className="check" onChange={flipCheck} />
      <p>{props.bName}</p>
    </div>
  );
}

export default BooleanDisplay;
