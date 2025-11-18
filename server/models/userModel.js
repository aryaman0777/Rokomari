import mongoose from "mongoose";

//const {v4:uuidv4}=require('uuidv4');

const employeeSchema = new mongoose.Schema(
    {
        // id:{
        //     type:Number,
        //     required: true,
        //     unique: true,  
        // },
        name:{
            type:String,
            required: true,
        },
        email:{
            type:String,
            required: true,
            unique: true,
            lowercase: true
        },
        phone:{
            type:String,
            required: true,
            unique: true,
        },
        password:{
            type:String,
            required: true
        },
        createdAt:{
            type:Date,
            required: true,
            default: Date.now,
        },
        updatedAt:{
            type:Date,
            required: true,
            default: Date.now,
        },
        gender:{
            type:String,
            required: true
        }
    }
);

export const employeeModel=mongoose.models.user||mongoose.model('employee',employeeSchema);

const employerSchema = new mongoose.Schema(
    {
        // id:{
        //     type:Number,
        //     required: true,
        //     unique: true,  
        // },
        name:{
            type:String,
            required: true,
        },
        email:{
            type:String,
            required: true,
            unique: true,
            lowercase: true
        },
        phone:{
            type:String,
            required: true,
            unique: true,
        },
        password:{
            type:String,
            required: true
        },
        createdAt:{
            type:Date,
            required: true,
            default: Date.now,
        },
        updatedAt:{
            type:Date,
            required: true,
            default: Date.now,
        },
        gender:{
            type:String,
            required: true
        }
    }
);

export const employerModel=mongoose.models.user||mongoose.model('employer',employerSchema);