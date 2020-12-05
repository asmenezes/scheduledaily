import React, { useContext } from "react";
import { DayNotesContext } from "../../contexts/daynotescontext";
import SwipeButton from "../swipebutton";

function DayNotes(props) {
  const { note, editNote } = useContext(DayNotesContext);

  const swapBottom = () => {
    let list = document.getElementById("booleanlist");
    list.classList.remove("hide");
    let notes = document.getElementsByClassName("dn");
    notes[0].classList.add("hide");
    notes[1].classList.add("hide");
  };

  return (
    <React.Fragment>
      <textarea
        id="daynotes"
        className="dn"
        onChange={(e) => editNote(e.target.value)}
        defaultValue={note[0] ? note[0].note : null}
      ></textarea>
      <SwipeButton onClick={() => swapBottom()} addClass="right dn" />
    </React.Fragment>
  );
}

export default DayNotes;
