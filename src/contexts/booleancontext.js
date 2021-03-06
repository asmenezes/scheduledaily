import React, { createContext, useReducer, useEffect } from "react";
import { booleanReducer } from "../reducers/booleanreducer";
import { isToday } from "../components/scripts/shared";
export const BooleanContext = createContext();

const BooleanContextProvider = (props) => {
  const [bools, boolsDispatch] = useReducer(booleanReducer, [], () => {
    const localData = localStorage.getItem("bools");
    return localData && isToday() ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("bools", JSON.stringify(bools));
    console.log(`Bools was just set to ${JSON.stringify(bools)}`);
  }, [bools]);
  return (
    <BooleanContext.Provider value={{ bools, boolsDispatch }}>
      {props.children}
    </BooleanContext.Provider>
  );
};

export default BooleanContextProvider;
