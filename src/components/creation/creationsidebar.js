import React, { useState } from "react";

function CreationSidebar() {
  return (
    <React.Fragment>
      <div className="sidebar" id="creationsidebar">
        <div className="sidebarlabel">
          <p className="lighttext">Preset Schedules:</p>
          <div className="sidebarlist"></div>
          <button id="createpresetbutton">Create Preset From Current</button>
        </div>
        <div className="sidebarlabel">
          <p className="lighttext">Preset Tasks:</p>
          <div className="sidebarlist"></div>
        </div>
        <div className="sidebarlabel">
          <p className="lighttext">Un-Times Tasks:</p>
          <div className="sidebarlist"></div>
        </div>
        <div className="dayNotes"></div>
      </div>
    </React.Fragment>
  );
}

export default CreationSidebar;
