import React, { useState } from "react";

function CurrentDisplay() {
  return (
    <div id="currentdisplay">
      <div id="currenttasktop">
        <h1 id="currentdisplayname"> CurrentTask </h1>
        <button id="nexttaskbutt">Next Task</button>
      </div>
      <div id="currentdiplaysub"> </div>
      <div id="currentdisplaynotes"> </div>
    </div>
  );
}

export default CurrentDisplay;
