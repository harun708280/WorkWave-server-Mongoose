import User from "../models/userModel.js";
import bcrypt from "bcryptjs"


export const registerUser=async(req,res)=>{
    try{
        const {name,email,photo}=req.body;
        const userExit=await User.findOne({email})
        if (userExit)return res.status(400).json({message:'User Already exists'})
        
        
        const user=await User.create({name,email,photo})
        res.status(201).json(user)

    }catch{
        res.status(500).json({message:error.message})

    }
}

