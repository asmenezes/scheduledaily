export const DayPresetReducer = (state, action) => {
  //let index = state.findIndex((task) => task.tID == action.task.tID);
  switch (action.type) {
    case "ADD_PRESET":
      return (state = [
        ...state,
        {
          presetName: action.preset.presetName,
          //going to need to more deeply copy tasks and subtasks
          //need to mark everything as incomplete and count at 0
          taskList: action.preset.presetTasks,
          dpID: Math.floor(Math.random() * 900000),
        },
      ]);

    case "REMOVE_PRESET":
      return state.filter((preset) => preset.dpID !== action.dpID);
    case "RENAME_PRESET":
      return [...state];
    default:
      return state;
  }
};
