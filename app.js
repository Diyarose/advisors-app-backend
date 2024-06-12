const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {advisormodel}=require("./models/advisor")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://dhiya04:dhiyafisat@cluster0.wspdqan.mongodb.net/teacherapp?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    let advisor=new advisormodel(input)
    advisor.save()
    console.log(advisor)
    res.json({"status":"success"})
})

app.post("/search",(req,res)=>{
    res.send("search")
})

app.post("/view",(req,res)=>{
    advisormodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch()
    
})

app.listen(8080,()=>{
    console.log("server started")
})
