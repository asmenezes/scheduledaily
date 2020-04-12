import React, {useState} from "react";

function CreationSidebar() {
  return (
    <React.Fragment>
      <div class="sidebar" id="creationsidebar">
        <div id="presetschedules">
          <p class="lighttext">Preset Schedules:</p>
          <div id="presetschedulelist" class="hide"></div>
          <button id="createpresetbutton">Create Preset From Current</button>
        </div>
        <div class="hide">presettasks</div>
        <div class="hide">untimedtasks</div>
        <div class="hide">daynotes</div>
      </div>
    </React.Fragment>
  );
}

export default CreationSidebar;
