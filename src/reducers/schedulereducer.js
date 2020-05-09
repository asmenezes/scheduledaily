export const scheduleReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return insertByTime(state, action.task);
      return;
    case "REMOVE_TASK":
      return state.filter((task) => task.tID !== action.tID);
    default:
      return state;
  }
};
// make this function insertion sort by start time
function insertByTime(state, task) {
  return [
    ...state,
    {
      taskName: task.taskName,
      tID: Math.floor(Math.random() * 900000),
      pID: 1,
      startTime: task.startTime,
      endTime: task.endTime,
      isComplete: false,
      taskNotes: task.taskNotes,
      subtasks: task.subtasks,
    },
  ];
}
