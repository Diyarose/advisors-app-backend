const mongoose=require("mongoose")
const schema =mongoose.Schema(
    {
        "tname":String,
        "tid":String,
        "tcourse":String,
        "salary":String
    }
)
let advisormodel=mongoose.model("advisors",schema)
module.exports={advisormodel}
