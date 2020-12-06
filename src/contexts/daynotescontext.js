import React, { createContext, useEffect, useState } from "react";
import { isToday } from "../components/scripts/shared";

export const DayNotesContext = createContext();

const DayNotesContextProvider = (props) => {
  let initNote = localStorage.getItem("note");
  let jsonNote =
    initNote && isToday()
      ? JSON.parse(initNote)
      : [{ note: "Today's Notes: " }];
  const [note, setNote] = useState(jsonNote);
  const editNote = (newNote) => {
    setNote([{ note: newNote }]);
  };

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);
  return (
    <DayNotesContext.Provider value={{ note, editNote }}>
      {props.children}
    </DayNotesContext.Provider>
  );
};

export default DayNotesContextProvider;
