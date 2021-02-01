import React, { useState, useContext } from "react";
import { BooleanContext } from "../../contexts/booleancontext";

function CreationSelectionInput(props) {
  const { boolsDispatch } = useContext(BooleanContext);
  const [boolName, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    boolsDispatch({
      type: "ADD_BOOL",
      bool: {
        boolName,
      },
    });
    setName("");
  };
  return (
    <div className="creationselection">
      <form onSubmit={handleSubmit}>
              <input type="submit" value="+" className="deletebutton" />
        <input
          className="selectioninput"
          placeholder="New"
          type="text"
          name="AltAdder"
          value={boolName}
          onChange={(e) => setName(e.target.value)}
          required
        />

      </form>
    </div>
  );
}

export default CreationSelectionInput;
