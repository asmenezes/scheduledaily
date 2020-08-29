import React, { useContext } from "react";
import CreationSelection from "./creationselection";
import CreationSelectionInput from "./creationselectioninput";
import { ScheduleContext } from "../../contexts/schedulecontext";
import { BooleanContext } from "../../contexts/booleancontext";
import { DayNotesContext } from "../../contexts/daynotescontext";
import { DayPresetContext } from "../../contexts/daypresetcontext";
import SwipeButton from "../swipebutton";

function CreationSidebar() {
  const { tasks, dispatch } = useContext(ScheduleContext);
  const { bools } = useContext(BooleanContext);
  const { dayPresets, dayDispatch } = useContext(DayPresetContext);
  const { note, editNote } = useContext(DayNotesContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    dayDispatch({
      type: "ADD_PRESET",
      preset: {
        presetName: new Date().toDateString(),
        presetTasks: tasks,
      },
    });
  };
  const swapTasks = (e, list) => {
    e.preventDefault();
    dispatch({
      type: "REPLACE_TASKS",
      tasks: list,
      task: 0,
    });
  };
  const hideSidebar = (a) => {
    let sb = document.getElementById("schedPreSB");
    a.target.parentNode.parentNode.classList.add("hide");
    sb.classList.remove("hide");
  };
  return (
    <React.Fragment>
      <div className="sidebar" id="creationsidebar">
        <div className="sidebarlabel">
          <p className="lighttext">Preset Schedules:</p>
          <div className="sidebarlist">
            {dayPresets.map((preset) => {
              return (
                <CreationSelection
                  selectionname={preset.presetName}
                  preset={preset}
                  key={preset.dpID}
                  onClick={(e) => {
                    swapTasks(e, preset.taskList);
                  }}
                />
              );
            })}
          </div>
          <button id="createpresetbutton" onClick={handleSubmit}>
            Create Preset From Current
          </button>
          {
            //do add today to presets here ^^ ie handle submit
          }
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
        <SwipeButton onClick={(a) => hideSidebar(a)} />
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
