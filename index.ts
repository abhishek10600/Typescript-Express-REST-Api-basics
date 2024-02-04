import express, { NextFunction, Request, Response } from "express";
import {newUserRequestBody,userResponseBody} from "./types/types";

const app = express();

app.use(express.json());

app.get("/",(req:Request,res:Response,next:NextFunction)=>{
    res.send("Hello World by express + TS by Abhishek Sharma now")
})

app.post("/register", (req:Request<newUserRequestBody>,res:Response,next:NextFunction)=>{
    const {name,email,password,phone} = req.body;
    console.log({name,email,password,phone});
    const user:userResponseBody = {
        name,
        email,
        password,
        phone
    }
    res.status(201).json({
        success:true,
        message:"user created successfully.",
        user
    })
})

app.post("/login", (req:Request,res:Response,next:NextFunction)=>{
    const {email,password} = req.body;
    res.status(200).json({
        success:true,
        message:"Logged in successfully.",
        email,
        password
    })
    
})

const port = 4000

app.listen(port,()=>{
    console.log(`App listening at port ${port}`)
})