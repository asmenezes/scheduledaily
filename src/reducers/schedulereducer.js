export const scheduleReducer = (tasks, action) => {
  switch (action.type) {
    case "ADD_TASK":
      // localStorage.setItem(
      //   "tasks",
      //   JSON.stringify([
      //     ...tasks,
      //     {
      //       taskName: action.task.taskName,
      //       tID: Math.random() * 900000,
      //       pID: 1,
      //       startTime: action.task.startTime,
      //       endTime: action.task.endTime,
      //       isComplete: false,
      //       taskNotes: action.task.taskNotes,
      //       subtasks: action.task.subtasks,
      //     },
      //   ])
      // );
      return [
        ...tasks,
        {
          taskName: action.task.taskName,
          tID: Math.random() * 900000,
          pID: 1,
          startTime: action.task.startTime,
          endTime: action.task.endTime,
          isComplete: false,
          taskNotes: action.task.taskNotes,
          subtasks: action.task.subtasks,
        },
      ];
    case "REMOVE_TASK":
      return tasks.filter((task) => task.tID != action.tID);
    default:
      return tasks;
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
