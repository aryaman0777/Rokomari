import mongoose from "mongoose";

//const {v4:uuidv4}=require('uuidv4');

// const userDetailsSchema = new mongoose.Schema(
//     {
//         name:{
//             type:String,
//             required:true,
//         },
//         phone:{
//             type:String,
//             required:true,
//         },
//         email:{
//             type:String,
//             required:true,
//         }
//     }
// )
// export const userDetailsModel=mongoose.models.user||mongoose.model('user',userDetailsSchema);

const jobSchema = new mongoose.Schema(
    {
        //auto generate krna h
        
        // jobId:{
        //     type:Number,
        //     required: true,
        //     unique: true, 
        // },
        category:{
            type:String,
            required:true,
        },
        status:{
            type:String,
            required:true,
            enum:["posted","accepted","completed"],default:"posted"
        },
        //jo accept krega uska details add krna h
        title:{
            type:String,
            required: true,
        },
        description:{
            type:String,
            required: true,
        },
        //list bnana h with name,email,phone.
        contactDetails:{
            type: Object,
            //ref: "employerModel",
            required: true,
           
        },
        //location ka kch kro
        jobCost:{
            type:String,
            required: true,
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
        //set krega employer calendar s
        expireAt:{
            type:Date,
            required: true,
            default: Date.now,
        }
    }
);

export const jobModel=mongoose.models.jobs||mongoose.model('jobs',jobSchema);