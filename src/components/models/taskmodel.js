import SubTask from "./subtaskmodel";
export class Task {
  taskName: string;
  pID: number;
  startTime: string;
  endTime: string;
  isComplete: boolean;
  taskNotes: string;
  tID: number;
  isCurrent: boolean; //Add it to the rest of the places
  subtasks: subtask[];
}
