import React, { createContext, useEffect, useReducer } from "react";
import { DayPresetReducer } from "../reducers/daypresetreducer";
export const DayPresetContext = createContext();

const DayPresetContextProvider = (props) => {
  const [dayPresets, dayDispatch] = useReducer(DayPresetReducer, [], () => {
    const localData = localStorage.getItem("dayPresets");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("dayPresets", JSON.stringify(dayPresets));
    console.log(`dayPresets was just set to ${JSON.stringify(dayPresets)}`);
  }, [dayPresets]);
  return (
    <DayPresetContext.Provider value={{ dayPresets, dayDispatch }}>
      {props.children}
    </DayPresetContext.Provider>
  );
};

export default DayPresetContextProvider;
