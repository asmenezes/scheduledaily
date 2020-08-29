import React from "react";

function SwipeButton(props) {
  return (
    <div
      className={`swipeButton ${props.addClass}`}
      onClick={props.onClick}
      id={props.id}
    >
      <span className="swbt">»</span>
    </div>
  );
}

export default SwipeButton;
