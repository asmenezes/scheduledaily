import React, {useContext} from "react";
import { BooleanContext } from "../../contexts/booleancontext";

function CreationSelection(props) {
  const {boolsDispatch} = useContext(BooleanContext)
  return (
    <div className="creationselection">
      <button className="deletebutton" onClick={() => boolsDispatch({ type: "REMOVE_BOOL", bID: props.bool.bID })}>x</button>
      <p className="selectionname">{props.selectionname}</p>
    </div>
  );
}

export default CreationSelection;
