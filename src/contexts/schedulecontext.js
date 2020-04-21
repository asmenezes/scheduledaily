import React, { createContext, useReducer, useEffect } from "react";
import { scheduleReducer } from "../reducers/schedulereducer";

export const ScheduleContext = createContext();

const ScheduleContextProvider = (props) => {
  const [tasks, dispatch] = useReducer(scheduleReducer, [], () => {
    const localData = localStorage.getItem("tasks");
    console.log(JSON.parse(localData));
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <ScheduleContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </ScheduleContext.Provider>
  );
};

export default ScheduleContextProvider;
