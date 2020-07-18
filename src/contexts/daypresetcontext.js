import React, { createContext, useEffect, useState } from "react";

export const DayPresetContext = createContext();

const DayPresetContextProvider = (props) => {
  const [dayPresets, dispatch] = useReducer(DayPresetReducer, [], () => {
    const localData = localStorage.getItem("dayPresets");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("dayPresets", JSON.stringify(dayPresets));
    console.log(`dayPresets was just set to ${JSON.stringify(dayPresets)}`);
  }, [dayPresets]);
  return (
    <DayPresetContext.Provider value={{ dayPresets, dispatch }}>
      {props.children}
    </DayPresetContext.Provider>
  );
};

export default DayPresetContextProvider;
