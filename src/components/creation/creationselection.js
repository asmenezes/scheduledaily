import React from "react";

function CreationSelection(props) {
  return (
    <div className="creationselection">
      <button className="deletebutton">x</button>
      <p className="selectionname">{props.selectionname}</p>
    </div>
  );
}

export default CreationSelection;
