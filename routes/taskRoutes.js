import express from "express";
import { createTask, deleteTask, getAllTask, getTask, updateTaskStatus } from "../controllers/taskController.js";

const router=express.Router()

router.post('/',createTask)
router.get('/',getAllTask)
router.get('/statusTask',getTask)
router.put("/:taskId/status",updateTaskStatus)
router.delete('/:taskId',deleteTask)


export default router