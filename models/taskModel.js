import mongoose from "mongoose";

const taskSchema=mongoose.Schema({
    title:{type:String,required:true},
    assignTo:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    description:{type:String,required:true},
    deadline:{type:String,required:true},
    priority:{
        type:String,
        enum:['Easy','Medium','High'],
        
    },
    createAt:{type:Date,default:Date.now}
})

const Tasks=mongoose.model("Tasks",taskSchema)
export default Tasks