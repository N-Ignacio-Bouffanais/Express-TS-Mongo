import { Router } from "express";
import {
  getItems,
  postItem,
  getItem,
  putItem,
  deleteItem,
} from "../controllers/task";

const task_router = Router();

task_router.get("/tasks", getItems)
task_router.post("/tasks", postItem);
task_router.get("/tasks/:id", getItem);
task_router.put("/tasks/:id", putItem);
task_router.delete("/tasks/:id", deleteItem);

export { task_router }
