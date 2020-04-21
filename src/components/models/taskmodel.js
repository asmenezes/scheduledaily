import SubTask from "./subtaskmodel";
export class Task {
  taskName: string;
  pID: number;
  startTime: Date;
  endTime: Date;
  isComplete: boolean;
  taskNotes: string;
  tID: number;
  subtasks: subtask[];
}
