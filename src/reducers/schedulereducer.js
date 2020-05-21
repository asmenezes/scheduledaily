export const scheduleReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return insertByTime(state, action.task);

    case "REMOVE_TASK":
      return state.filter((task) => task.tID !== action.tID);
    default:
      return state;
  }
};
// make this function insertion sort by start time instead of at the end
function insertByTime(state, task) {
  state = [
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
    }
  ]
  state = state.sort()//Actually make a function that sorts though
  return [
    ...state
  ];
}
//Add Complete_Task
//Add Edit_dayNote
