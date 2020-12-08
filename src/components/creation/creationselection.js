import React, { useContext } from "react";
import { BooleanContext } from "../../contexts/booleancontext";
import { DayPresetContext } from "../../contexts/daypresetcontext";

function CreationSelection(props) {
  //Possibly also do one that renames the thing
  const { boolsDispatch } = useContext(BooleanContext);
  const { dayDispatch } = useContext(DayPresetContext);
  function deleteSelection(e) {
    e.preventDefault();
    if (props.bool) {
      boolsDispatch({ type: "REMOVE_BOOL", bID: props.bool.bID });
    } else if (props.preset) {
      dayDispatch({ type: "REMOVE_PRESET", dpID: props.preset.dpID });
    }
  }
  return (
    <div className="creationselection">
      <button className="deletebutton" onClick={(e) => deleteSelection(e)}>
        x
      </button>
      <p className="selectionname" onClick={props.onClick}>
        {props.selectionname}
      </p>
    </div>
  );
}

export default CreationSelection;
