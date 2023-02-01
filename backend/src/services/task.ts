import { Task } from "../interfaces/task";
import TaskModel from "../models/task";

const createTask = async (task: Task) => {
  const newTask = await TaskModel.create(task);
  return newTask;
};

const fetchTasks = async () => {
  const task = await TaskModel.find({});
  return task;
};

const fetch_one_task = async (id: string) => {
  const task = await TaskModel.findById({ _id: id });
  return task;
};

const update_task = async (id: string, data: Task) => {
  const task = await TaskModel.findByIdAndUpdate({ _id: id }, data, {
    new: true,
  });
};

const delete_task = async (id: string) => {
  const task = await TaskModel.findByIdAndDelete({ _id: id });
  return task;
};

export { createTask, fetchTasks, fetch_one_task, update_task, delete_task };

