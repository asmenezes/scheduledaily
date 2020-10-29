import { dateConv, now } from "../components/scripts/shared";

export const scheduleReducer = (state, action) => {
  let index = state.findIndex((task) => task.tID == action.task.tID);
  switch (action.type) {
    case "ADD_TASK":
      return insertByTime(state, action.task);
    case "REPLACE_TASKS":
      return [...action.tasks];
    case "REMOVE_TASK":
      return state.filter((task) => task.tID !== action.task.tID);
    case "TOGGLE_TASK":
      state[index].isComplete = !state[index].isComplete;
      return [...state];
    case "EDIT_TASK_NOTE":
      state[action.task.ind].taskNotes = action.task.note;
      return [...state];
    case "MARK_CURRENT":
      for (let i = 0; i < state.length; i++) {
        if (i == index) {
          state[index].isCurrent = true;
        } else {
          state[i].isCurrent = false;
        }
      }
      console.log("currentmarked");
      return [...state];
    case "TOGGLE_SUB":
      let stIDcheck = action.task.sub.stID;
      let stIndex = state[index].subtasks.findIndex(
        (sub) => sub.stID == stIDcheck
      );
      state[index].subtasks[stIndex].isComplete = !action.task.value;
      return [...state];
    default:
      return state;
  }
};
//add and remove SubTasks
//edit subtasks
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
      isCurrent: false,
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
