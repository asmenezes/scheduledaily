import React, {useContext} from "react";
import CreationSelection from "./creationselection";
import CreationSelectionInput from "./creationselectioninput";

import { DayNotesContext } from "../../contexts/daynotescontext";

function CreationSidebar() {
    const {note,editNote} = useContext(DayNotesContext)
  return (
    <React.Fragment>
      <div className="sidebar" id="creationsidebar">
        <div className="sidebarlabel">
          <p className="lighttext">Preset Schedules:</p>
          <div className="sidebarlist">
            <CreationSelection selectionname={"Selection"} />
          </div>
          <button id="createpresetbutton">Create Preset From Current</button>
        </div>
        <div className="sidebarlabel">
          <p className="lighttext">Preset Tasks:</p>
          <div className="sidebarlist">

            <CreationSelectionInput />

          </div>
        </div>
        <div className="sidebarlabel">
          <p className="lighttext">Un-Timed Tasks:</p>
          <div className="sidebarlist">
            <CreationSelection selectionname={"Selection"} />
          </div>
        </div>
        <textarea
          cols="28"
          rows="6"
          className="dayNotes"
          onChange={(e) => editNote(e.target.value)}
          defaultValue={note[0]? note[0].note : null}
        ></textarea>
      </div>
    </React.Fragment>
  );
}

export default CreationSidebar;
