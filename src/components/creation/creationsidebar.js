import React, { useState } from "react";
import CreationSelection from "./creationselection";

function CreationSidebar() {
  return (
    <React.Fragment>
      <div className="sidebar" id="creationsidebar">
        <div className="sidebarlabel">
          <p className="lighttext">Preset Schedules:</p>
          <div className="sidebarlist">
            <CreationSelection selectionname={"Selection"}/>
          </div>
          <button id="createpresetbutton">Create Preset From Current</button>
        </div>
        <div className="sidebarlabel">
          <p className="lighttext">Preset Tasks:</p>
          <div className="sidebarlist">
          <CreationSelection selectionname={"Selection"}/>
          </div>


        </div>
        <div className="sidebarlabel">
          <p className="lighttext">Un-Timed Tasks:</p>
          <div className="sidebarlist">
            <CreationSelection selectionname={"Selection"}/>
          </div>
        </div>
        <textarea cols="28" rows="6" className="dayNotes">
          Day Notes: 
        </textarea>
      </div>
    </React.Fragment>
  );
}

export default CreationSidebar;
