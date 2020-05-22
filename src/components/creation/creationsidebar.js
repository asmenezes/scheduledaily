import React, { useContext } from "react";
import CreationSelection from "./creationselection";
import CreationSelectionInput from "./creationselectioninput";
import { ScheduleContext } from "../../contexts/schedulecontext";
import { BooleanContext } from "../../contexts/booleancontext";
import { DayNotesContext } from "../../contexts/daynotescontext";

function CreationSidebar() {
  const { tasks } = useContext(ScheduleContext);
  const { bools } = useContext(BooleanContext);

  const { note, editNote } = useContext(DayNotesContext);
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
            <ul>
              {tasks.map((task) => {
                return (
                  <CreationSelection
                    selectionname={task.taskName}
                    key={task.tID}
                  />
                );
              })}
            </ul>

            <CreationSelectionInput action="ADD_PRESET" />
          </div>
        </div>
        <div className="sidebarlabel">
          <p className="lighttext">Un-Timed Tasks:</p>
          <div className="sidebarlist">
            {bools[0] ? (
              <ul>
                {bools.map((bool) => {
                  return (
                    <CreationSelection
                      selectionname={bool.boolName}
                      key={bool.bID}
                      bool={bool}
                    />
                  );
                })}
              </ul>
            ) : null}
            <CreationSelectionInput action="ADD_BOOl" />
          </div>
        </div>
        <textarea
          cols="28"
          rows="6"
          className="dayNotes"
          onChange={(e) => editNote(e.target.value)}
          defaultValue={note[0] ? note[0].note : null}
        ></textarea>
      </div>
    </React.Fragment>
  );
}

export default CreationSidebar;
