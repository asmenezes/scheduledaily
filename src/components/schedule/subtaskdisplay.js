import React from "react";

function SubtaskDisplay(props) {
  return (
    <div class="subtaskdisplay">
      <input type="checkbox" class="check" />
      <p>{props.stName}</p>
      <p>Indic Placeholder</p>
    </div>
  );
}

export default SubtaskDisplay;
