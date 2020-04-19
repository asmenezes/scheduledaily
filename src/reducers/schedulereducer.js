import { v4 as uuidv4 } from "uuid";

export const scheduleReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        { title: action.book.title, author: action.book.author, id: uuidv4() },
      ];
    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.id);
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
