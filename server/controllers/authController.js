import { employeeModel, employerModel } from "../models/userModel.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const employeeRegister = async(req,res)=>{
    try {
        const {name,email,password,phone,gender} = req.body;

        if(!email || !name || !password || !gender || !phone){
            return res.status(400).json({success:false, message:"all fields needed"});
        }

        const existingUser = await employeeModel.findOne({email});
        if(existingUser){
            return res.status(400).json({success:false, message:"user already exists"});
        }

        const hashPassword= await bcrypt.hash(password,10)

        const newEmployee = new employeeModel({
            name,email,password: hashPassword,phone,gender
        });



        await newEmployee.save();
        

        const token = jwt.sign({id: newEmployee._id}, process.env.JWT_SECRET, {expiresIn: '7d'}); 
        
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })
        
        return res.status(200).json({success:true, message:"user created successfully"});
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

export const employerRegister = async(req,res)=>{
    try {
        const {name,email,password,phone,gender} = req.body;

        if(!email || !name || !password || !gender || !phone){
            return res.status(400).json({success:false, message:"all fields needed"});
        }

        const existingUser = await employerModel.findOne({email});
        if(existingUser){
            return res.status(400).json({success:false, message:"user already exists"});
        }
        const hashPassword= await bcrypt.hash(password,10)

        const newEmployer = new employerModel({
            name,email,password:hashPassword,phone,gender
        });

        await newEmployer.save();

        const token = jwt.sign({_id: newEmployer._id}, process.env.JWT_SECRET, {expiresIn: '7d'}); 
        
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })

        return res.status(200).json({success:true, message:"user created successfully"});
        
    } catch (error) {
        return res.status(400).json(error.message);
    }
};


export const employeeLogin = async(req,res)=>{
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({success:false, message:"all fields needed"});
        }

        const existingUser = await employeeModel.findOne({email});

        if(!existingUser){
            return res.status(400).json({success:false, message:"The email does not exists"})
        }

        const decryptedPass = await bcrypt.compare(password,existingUser.password)

        if(decryptedPass){
            const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET, {expiresIn: '7d'}); 
        
            res.cookie("token", token, {
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            })
        return res.status(200).json({success:true, message:"Welcome to Rokomari"});

        }else{
             return res.status(400).json({success:false, message:"Wrong Password!!! Try again"});
        
        }

    } catch (error) {
        return res.status(400).json(error.message);
    }
};


export const employerLogin = async(req,res)=>{
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({success:false, message:"all fields needed"});
        }

        const existingUser = await employerModel.findOne({email});

        if(!existingUser){
            return res.status(400).json({success:false, message:"The email does not exists"})
        }
      

        const decryptedPass = await bcrypt.compare(password,existingUser.password);

        if(decryptedPass){
            const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET, {expiresIn: '7d'}); 
        
            const cookie = res.cookie("token", token, {
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            
        })

        return res.status(200).json({success:true, message:"Welcome to Rokomari"});

        }else{
             return res.status(400).json({success:false, message:"Wrong Password!!! Try again"});
        
        }

         

    } catch (error) {
        return res.status(400).json(error.message);
    }
};
