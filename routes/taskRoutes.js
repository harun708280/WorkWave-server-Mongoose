import express from "express";
import { createTask, getAllTask } from "../controllers/taskController.js";

const router=express.Router()

router.post('/',createTask)
router.get('/',getAllTask)


export default router