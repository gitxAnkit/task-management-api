import express from "express";
import { addTask, deleteTask, getTasks } from "../controllers/taskController.js";

const router = express.Router();

router.route("/tasks")
    .post(addTask)
    .get(getTasks);
router.route("/task/:taskId").delete(deleteTask);

export default router;