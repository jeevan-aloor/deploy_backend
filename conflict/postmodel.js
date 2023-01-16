const mongoose=require("mongoose")

const postschema=mongoose.Schema({
    title : String,
    body : String,
    device : String
    })


const PostModel=mongoose.model("postdata",postschema)

module.exports={
    PostModel
}