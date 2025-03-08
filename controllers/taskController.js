import Tasks from "../models/taskModel.js"

export const createTask=async(req,res)=>{
    try{
        const {title, assignTo, description, deadline, priority}=req.body
        const newTask=await Tasks.create({
            title, assignTo, description, deadline, priority,status:"pending", 

        })

        res.status(201).json(newTask)

    }catch{
        res.status(500).json({ message: error.message });

    }

}

export const getAllTask=async(req,res)=>{
    try{
        const tasks = await Tasks.find().sort({ _id: -1 }).populate("assignTo", "name email photo");
        res.status(200).json(tasks);
        

    }catch (error) {
        res.status(500).json({ message: error.message });
    }

}

export const updateTaskStatus=async(req,res)=>{
    try{
        const {taskId}=req.params;
        const {status}=req.body
        const updatedTask=await Tasks.findByIdAndUpdate(
            taskId,{status},{new:true}
        )
        if (!updatedTask) return res.status(404).json({ message: "Task not found" });

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}