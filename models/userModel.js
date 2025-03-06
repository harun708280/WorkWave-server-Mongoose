import mongoose from "mongoose";

const userSchema=mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        photo:{type:String},
        role:{
            type:String,
            enum:['inactive','active','admin'],
            default:'inactive'

        }

    }
)

const User=mongoose.model('User',userSchema)
export default User