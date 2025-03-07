import express from "express";
import { getAllUsers, getUserByEmail, registerUser } from "../controllers/userController.js";
const router=express.Router()

router.post("/",registerUser)
router.get('/:email',getUserByEmail)
router.get('/',getAllUsers)

export default router