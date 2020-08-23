import React from "react";

function SwipeButton(props) {
  return (
    <div className={`swipeButton ${props.addClass}`}>
      <span className="swbt">»</span>
    </div>
  );
}

export default SwipeButton;
