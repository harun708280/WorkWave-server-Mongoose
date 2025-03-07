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

export const  getUserByEmail=async(req,res)=>{
    try{
        const {email}=req.params;
        const user=await User.findOne({email})
        if (!user) return res.status(404).json({message:'user not found'})
        res.status(200).json(user)

    }catch(error){

        res.status(500).json({ message: error.message });

    }
}

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};