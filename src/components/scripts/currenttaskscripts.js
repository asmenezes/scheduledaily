import { dateConv, now } from "./shared";

export const findCIndex = (tasks) => {
  return tasks.findIndex(
    (task) =>
      dateConv(task.startTime.toString()) <= now &&
      dateConv(task.endTime.toString()) >= now
  );
};
