import { jobModel} from "../models/jobModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { employerModel } from "../models/userModel.js";

export const createJob = async(req,res)=>{
    try{
        const {title,description,category,jobCost,expireAt} = req.body;
        

        if(!title || !description || !category || !jobCost || !expireAt){
            return res.status(400).json({success:false , message:"All fields needed"});
        }

        const id = req.user.id;
        console.log("a"+id);
        
        const existingUser = await employerModel.findById(id);

        const newJob = new jobModel({
            title,description,contactDetails:{_id:existingUser._id,name:existingUser.name,phone:existingUser.phone,email:existingUser.email},category,jobCost,expireAt
        });

        await newJob.save();

        return res.status(200).json({success:true, message:"job successfully posted"})
    }
    catch(error){
        return res.status(400).json(error.message);
    }

};

export const updateJob= async(req,res)=>{
    try {
        //update
        const {_id,title,description,category,jobCost,expireAt} = req.body;
        console.log(_id)

        const job = await jobModel.findById(_id);
        if(title){
            job.title=title;
            console.log(job.title)
        }
        if(description){
            job.description=description;
        }
        if(category){
            job.category=category;
        }
        if(jobCost){
            job.jobCost=jobCost;
        }
        if(expireAt){
            job.expireAt=expireAt;
        }
    
        job.updatedAt = Date.now();
        await job.save();


        

        return res.status(200).json({success:true, message:"job successfully updated"})
    } catch (error) {
        return res.status(400).json(error.message);
    }
}


export const deleteJob= async(req,res)=>{

    try {
        //delete
        const {_id} = req.body;
        console.log(_id)
        await jobModel.deleteOne({_id});
        
        

        return res.status(200).json({success:true, message:"job successfully deleted"})
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

export const viewJob= async(req,res)=>{
    try {
        
        const userId = req.user.id;

        const allJobs = await jobModel.find();
       
        let jobList=[];
        for(const job of allJobs){
            //console.log(job.contactDetails._id.toString())
            //console.log(decodedToken.id)
            if(job.contactDetails._id.toString()===userId){
            jobList.push(job);
           console.log(jobList); 
        }

        }

        if(jobList.length!=0){
            return res.status(200).json({success:true, message:jobList});

        }
        else{
            return res.status(400).json({success:true , message:"no job posted"});
        }
    
    } catch (error) {
        return res.status(400).json(error.message);
    }
}
