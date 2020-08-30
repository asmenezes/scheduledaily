import React, { useContext } from "react";
import SubtaskDisplay from "./subtaskdisplay";
import { BooleanContext } from "../../contexts/booleancontext";
import SwipeButton from "../swipebutton";

function BooleanList() {
  const { bools } = useContext(BooleanContext);
  const unswapBottom = () => {
    let list = document.getElementById("booleanlist");
    list.classList.add("hide");
    let notes = document.getElementsByClassName("dn");
    notes[0].classList.remove("hide");
    notes[1].classList.remove("hide");
  };
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
      <SwipeButton addClass={"left"} onClick={() => unswapBottom()} />
    </div>
  );
}

export default BooleanList;
