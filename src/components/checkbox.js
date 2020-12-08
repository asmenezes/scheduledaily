import React from "react";

function CheckBox(props) {
  const swap = () => {
    props.onClick();
  };
  return (
    <div
      className={`checkBox ${props.value ? "checked" : "unchecked"}`}
      onClick={swap}
      id={props.id}
    >
      <span className="check">{props.value ? "✓" : "✗"}</span>
    </div>
  );
}

export default CheckBox;
//props
//on clicked
//value
//two colors and switch text
//Do I even need add class
