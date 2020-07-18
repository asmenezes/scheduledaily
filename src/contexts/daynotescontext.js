import React, { createContext, useEffect, useState } from "react";

export const DayNotesContext = createContext();

const DayNotesContextProvider = (props) => {
  let initNote = localStorage.getItem("note");
  let jsonNote = initNote
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
