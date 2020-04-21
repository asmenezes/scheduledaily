import SubTask from "./subtaskmodel";
export class Task {
  taskName: string;
  pID: number;
  startTime: string;
  endTime: string;
  isComplete: boolean;
  taskNotes: string;
  tID: number;
  subtasks: subtask[];
}
