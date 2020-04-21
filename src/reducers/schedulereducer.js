export const scheduleReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          taskName: action.task.taskName,
          tID: action.task.tID,
          pID: action.task.pID,
          startTime: action.task.startTime,
          endTime: action.task.endTime,
          isComplete: action.task.isComplete,
          taskNotes: action.task.taskNotes,
          subtasks: action.task.subtasks,
        },
      ];
    case "REMOVE_TASK":
      return state.filter((task) => task.tID !== action.id);
    default:
      return state;
  }
};
// Complete current task
/*
complete subtask
update subtask
getsubtasks
update bookeantask
add task
delete task
update task
update notes
get all tasks
get current task
next task
 */
