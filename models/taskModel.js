import mongoose from "mongoose";

const taskSchema=mongoose.Schema({
    title:{type:String,required:true},
    assignTo:{type:String,required:true},
    description:{type:String,required:true},
    deadline:{type:String,required:true},
    priority:{
        type:String,
        enum:['Easy','Medium','High'],
        
    }
})