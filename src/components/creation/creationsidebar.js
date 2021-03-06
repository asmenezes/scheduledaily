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
    let upbutt = document.getElementById("createrReveal");
    upbutt.classList.remove("hide");
    a.target.parentNode.parentNode.parentNode.classList.add("hide");
    sb.classList.remove("hide");
  };
  return (
    <React.Fragment>
      <div className="sidebar" id="creationsidebar">
        <div id="sideScroller">
          <div className="sidebarlabel">
            <p className="lighttext">Preset Schedules:</p>
            <div className="sidebarlist">{dayPresets[0]?
              dayPresets.map((preset) => {
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
              }):<h1 className="onHead">Click Below To Create A Preset.</h1>}
            </div>
            <button id="createpresetbutton" onClick={handleSubmit}>
              Create Preset From Current
            </button>
          </div>
          {/*
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
    */}
          <SwipeButton id="cSideHide" onClick={(a) => hideSidebar(a)} />
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
              {bools[0]? null:<h1 className="onHead">These Tasks Are Not Scheduled.</h1>}
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
      </div>
    </React.Fragment>
  );
}

export default CreationSidebar;
