import express from "express";
import { createTask, getAllTask, updateTaskStatus } from "../controllers/taskController.js";

const router=express.Router()

router.post('/',createTask)
router.get('/',getAllTask)
router.put("/:taskId/status",updateTaskStatus)


export default router