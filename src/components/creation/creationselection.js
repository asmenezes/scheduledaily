import React, { useContext } from "react";
import { BooleanContext } from "../../contexts/booleancontext";

function CreationSelection(props) {
  //make a switch statement that finds out what the selection is and then deletes it with the appropriate method/context
  //Possibly also do one that renames the thing
  const { boolsDispatch } = useContext(BooleanContext);
  return (
    <div className="creationselection">
      <button
        className="deletebutton"
        onClick={() =>
          boolsDispatch({ type: "REMOVE_BOOL", bID: props.bool.bID })
        }
      >
        x
      </button>
      <p className="selectionname" onClick={props.onClick}>
        {props.selectionname}
      </p>
    </div>
  );
}

export default CreationSelection;
