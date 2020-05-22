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
    },
  ];
  state.sort(function (a, b) {
    let hoursA = Number(a.startTime.substring(0, 2));
    let hoursB = Number(b.startTime.substring(0, 2));
    let minutesA = Number(a.startTime.substring(3, 5));
    let minutesB = Number(b.startTime.substring(3, 5));

    if (
      Number(a.startTime.substring(0, 2)) <
        Number(b.startTime.substring(0, 2)) ||
      (Number(a.startTime.substring(0, 2)) ===
        Number(b.startTime.substring(0, 2)) &&
        Number(a.startTime.substring(3, 5)) <
          Number(b.startTime.substring(3, 5)))
    ) {
      return -1;
    }
    if (
      Number(b.startTime.substring(0, 2)) < Number(a.startTime.substring(0, 2))
    ) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }); //Actually make a function that sorts though
  return [...state];
}

function compare(a, b) {
  const hoursA = Number(a.startTime.substring(0, 2));
  const hoursB = Number(b.startTime.substring(0, 2));
  const minutesA = Number(a.startTime.substring(3, 5));
  const minutesB = Number(b.startTime.substring(3, 5));

  if (hoursA < hoursB || (hoursA === hoursB && minutesA < minutesB)) {
    return -1;
  }
  if (hoursB < hoursA) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
//Add Complete_Task
//Add Edit_dayNote
