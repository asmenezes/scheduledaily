export const scheduleReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      console.log(state);
      return [
        ...state,
        {
          taskName: action.task.taskName,
          tID: Math.floor(Math.random() * 900000),
          pID: 1,
          startTime: action.task.startTime,
          endTime: action.task.endTime,
          isComplete: false,
          taskNotes: action.task.taskNotes,
          subtasks: action.task.subtasks,
        },
      ];
    case "REMOVE_TASK":
      console.log(state);
      console.log(state.filter((task) => task.tID !== action.tID));
      return state.filter((task) => task.tID !== action.tID);
    default:
      return state;
  }
};
