import SubTask from "./subtaskmodel";
export class Task {
  taskName: string;
  pID: string;
  startTime: string;
  endTime: string;
  isComplete: boolean;
  taskNotes: string;
  tID: string;
  isCurrent: boolean; //Add it to the rest of the places
  subtasks: subtask[];
}
