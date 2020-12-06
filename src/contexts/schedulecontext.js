import React, { createContext, useReducer, useEffect } from "react";
import { scheduleReducer } from "../reducers/schedulereducer";
import { isToday } from "../components/scripts/shared";

export const ScheduleContext = createContext();

const ScheduleContextProvider = (props) => {
  const [tasks, dispatch] = useReducer(scheduleReducer, [], () => {
    const localData = localStorage.getItem("tasks");
    //check with an if in here to see if we are on the current day or not
    //Actually use the function I will make in shared

    return localData && isToday() ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    //  console.log(`Tasks was just set to ${JSON.stringify(tasks)}`);
  }, [tasks]);
  return (
    <ScheduleContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </ScheduleContext.Provider>
  );
};

export default ScheduleContextProvider;
