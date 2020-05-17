import React, {useContext} from "react";
import { DayNotesContext } from "../../contexts/daynotescontext";

function DayNotes() {
  const {note,editNote} = useContext(DayNotesContext)


  return <textarea id="daynotes" onChange={(e) => editNote(e.target.value)}
  defaultValue={note[0]? note[0].note : null}></textarea>;
}

export default DayNotes;
