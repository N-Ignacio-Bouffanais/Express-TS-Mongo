import mongoose, { model, Schema, Document, Types } from 'mongoose';
import { Task } from '../interfaces/task';

mongoose.set("strictQuery", true);

const TaskSchema = new Schema<Task>({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const TaskModel = model('Task', TaskSchema);

export default TaskModel;
