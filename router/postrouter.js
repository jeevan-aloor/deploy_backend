

const {Router}=require("express")
const {PostModel}=require("../conflict/postmodel")

const postRouter=Router()

postRouter.get("/posts",async(req,res)=>{
    const query=req.query
    
    try {
        const data=await PostModel.find(query)
        res.send(data)
        
    } catch (error) {
        console.log("something wrong in adding")
        console.log(error)
        
    }
})

postRouter.post("/posts/addpost",async(req,res)=>{
    const payload=req.body
    try {
        const data=new PostModel(payload)
        await data.save()
        res.send("post added")
        
    } catch (error) {
        console.log("something wrong in adding")
        console.log(error)
        
    }
})

postRouter.patch("/posts/update/:id",async(req,res)=>{
    const payload=req.body
    const ID=req.params.id
    try {
        await PostModel.findByIdAndUpdate({_id:ID},payload)
        res.send("post updated")
        
    } catch (error) {
        console.log("something wrong in adding")
        console.log(error)
        
    }
})

postRouter.delete("/posts/delete/:id",async(req,res)=>{
    
    const ID=req.params.id
    try {
        await PostModel.findByIdAndDelete({_id:ID})
        res.send("post deleted")
        
    } catch (error) {
        console.log("something wrong in adding")
        console.log(error)
        
    }
})





module.exports={
    postRouter
}