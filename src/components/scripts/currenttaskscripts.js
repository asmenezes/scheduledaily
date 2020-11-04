import { dateConv, now } from "./shared";

export const findCIndex = (tasks) => {
  return tasks.findIndex((task) => (task.isCurrent ? task : false));
};
