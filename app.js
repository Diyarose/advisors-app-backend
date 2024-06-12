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
    let input=req.body
    advisormodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
    
})

app.post("/delete",(req,res)=>{
    let input=req.body
    advisormodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json("error")
        }
    )
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
