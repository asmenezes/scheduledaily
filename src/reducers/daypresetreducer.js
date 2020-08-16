export const DayPresetReducer = (state, action) => {
  //let index = state.findIndex((task) => task.tID == action.task.tID);
  switch (action.type) {
    case "ADD_PRESET":
      return (state = [
        ...state,
        {
          presetName: action.preset.presetName,
          taskList: action.preset.presetTasks,
          dpID: Math.floor(Math.random() * 900000),
        },
      ]);

    case "REMOVE_PRESET":
      return state.filter((preset) => preset.dpID !== action.dpID);
    /*  case "TOGGLE_TASK":
      state[index].isComplete = !state[index].isComplete;
      console.log(
        `index is ${state[index].isComplete}, tID is ${action.task.tID}`
      );
      return state;*/
    case "RENAME_PRESET":
      return [...state];
    default:
      return state;
  }
};
//Switch all this to day preset relevant code
