# react-native-Express-TS-Mongo

- Full stack

## Stack
- Mongodb, TypeScript, Express, dotenv.

## DB Mongo connection with TypeScript and Dotenv
```ts
//config/mongo.ts
import "dotenv/config"
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
  const DB_URI = <string>process.env.MONGO_URL;
  await connect(DB_URI);
}
export default dbConnect;

//app.ts
import db from "./config/mongo";
db().then(() => console.log("Database connected"));
```
## Model Tasks
```ts
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

```


