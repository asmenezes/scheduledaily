export const scheduleReducer = (state, action) => {
  let index = state.findIndex((task) => task.tID == action.task.tID);
  switch (action.type) {
    case "ADD_TASK":
      return insertByTime(state, action.task);

    case "REMOVE_TASK":
      return state.filter((task) => task.tID !== action.tID);
    case "TOGGLE_TASK":
      state[index].isComplete = !state[index].isComplete;
      console.log(
        `index is ${state[index].isComplete}, tID is ${action.task.tID}`
      );
      return state;
    case "EDIT_TASK_NOTE":
      console.log(action.task.ind);
      state[action.task.ind].taskNotes = action.task.note;
      console.log(state[action.task.ind].taskNotes);
      return [...state];
    default:
      return state;
  }
};
//Switch all this to day preset relevant code
