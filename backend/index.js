const express=require('express');
const cors=require("cors");
const { connection } = require("./config/db.js");
const { NoticeModel } = require('./models/notice.model.js');
require("dotenv").config();

const app=express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to Trello Board Backend");
});

app.post("/notice", async(req,res)=>{
    const payload=req.body;
    try{
        const notice=new NoticeModel(payload);
        await notice.save();
        res.send({"msg":"New notice created"});
    }catch(err){
        res.send({"msg":"Error creating a new notice"});
    }
});

app.get("/notice", async(req,res)=>{
    try{
        const notices=await NoticeModel.find();
        res.send(notices);
    }catch(err){
        res.send({"msg":"Error fetching notices"});
    }
});

app.delete("/notice/:id",async(req,res)=>{
    //console.log(req.params.id)
    try{
        await NoticeModel.findByIdAndDelete(req.params.id);
        res.send({"msg":"Notice deleted succesfully"});
    }catch(err){
        //console.log(err);
        res.send({"msg":"Error in deleting notice"});
    }
})

app.listen(process.env.port, async()=>{
    try{
        await connection;
        console.log(`Connected to DB`);
    }catch(err){
        console.log("Error connecting to DB");
    }
    console.log(`Listening on port ${process.env.port}`);
})
