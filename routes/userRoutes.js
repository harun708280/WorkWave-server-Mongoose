import express from "express";
import { getUserByEmail, registerUser } from "../controllers/userController.js";
const router=express.Router()

router.post("/",registerUser)
router.get('/:email',getUserByEmail)

export default router