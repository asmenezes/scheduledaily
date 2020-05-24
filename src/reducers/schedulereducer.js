export const scheduleReducer = (state, action) => {
  let index = state.findIndex((task) => task.tID == action.tID);
  switch (action.type) {
    case "ADD_TASK":
      return insertByTime(state, action.task);

    case "REMOVE_TASK":
      return state.filter((task) => task.tID !== action.tID);
    case "TOGGLE_TASK":
      state[index].isComplete = !state[index].isComplete;
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
    },
  ];
  state.sort(function (a, b) {
    let hoursA = Number(a.startTime.substring(0, 2));
    let hoursB = Number(b.startTime.substring(0, 2));
    let minutesA = Number(a.startTime.substring(3, 5));
    let minutesB = Number(b.startTime.substring(3, 5));

    if (hoursA < hoursB || (hoursA === hoursB && minutesA < minutesB)) {
      return -1;
    }
    if (hoursB < hoursA) {
      return 1;
    }

    return 0;
  });
  return [...state];
}
