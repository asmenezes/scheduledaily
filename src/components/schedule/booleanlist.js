import React, { useContext } from "react";
import SubtaskDisplay from "./subtaskdisplay";
import { BooleanContext } from "../../contexts/booleancontext";

function BooleanList() {
  const { bools } = useContext(BooleanContext);
  return (
    <div id="booleanlist" className="scroll">
      {bools[0] ? (
        <ul>
          {bools.map((bool) => {
            return (
              <SubtaskDisplay
                sub={bool}
                stName={bool.boolName}
                key={bool.bID}
                key2={bool.bID}
              />
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default BooleanList;
