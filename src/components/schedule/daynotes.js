import React, { useContext } from "react";
import { DayNotesContext } from "../../contexts/daynotescontext";
import SwipeButton from "../swipebutton";

function DayNotes() {
  const { note, editNote } = useContext(DayNotesContext);

  return (
    <React.Fragment>
      <textarea
        id="daynotes"
        onChange={(e) => editNote(e.target.value)}
        defaultValue={note[0] ? note[0].note : null}
      ></textarea>
      <SwipeButton addClass="right" />
    </React.Fragment>
  );
}

export default DayNotes;
