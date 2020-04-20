import { v4 as uuidv4 } from "uuid";

export const scheduleReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          title: action.day.task.taskname,
          author: action.day.task.tid,
          id: uuidv4(),
        },
      ];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.id);
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
