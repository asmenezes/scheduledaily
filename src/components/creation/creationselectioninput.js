import React from "react";

function CreationSelectionInput(props) {
  return (
    <div className="creationselection">
      <button className="deletebutton">+</button>
      <input
        className="selectioninput"
        placeholder="New"
        type="text"
      />
    </div>
  );
}

export default CreationSelectionInput;
