import { Request, Response } from "express";
import {
  createTask,
  fetchTasks,
  fetch_one_task,
  update_task,
  delete_task,
} from "../services/task";


const getItems = async (req: Request, res: Response) => {
    try {
        const items = await fetchTasks();
        return res.send({data:items, user:req.user});
    } catch (e) {
        res.json(e);
    }
}

const postItem = async (req: Request, res: Response) => {
    try {
        const responseItem = await createTask(req.body);
        res.send(responseItem);
    } catch (e) {
        res.json(e);
    }
}

const getItem = async (req: Request, res: Response) => {
    try {
        const response = await fetch_one_task(req.params.id);
        const data = response ? response : "Not Found";
        res.send(data);
    } catch (e) {
        res.json(e);
    }
}

const putItem = async (req: Request, res: Response) => {
    try {
        const response = await update_task(req.params.id, req.body);
        res.send(response);
    } catch (e) {
        res.json(e);
    }
}

const deleteItem = async (req: Request, res: Response) => {
    try {
      const response = await delete_task(req.params.id);
      res.send(response);
    } catch (e) {
      res.json(e);
    }
}


export { getItems, postItem, getItem, putItem, deleteItem };