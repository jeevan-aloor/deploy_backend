const {Router}=require("express")
const {UserModel}=require("../conflict/usermodel")
var jwt = require("jsonwebtoken");

const userRouter=Router()



userRouter.post("/users/register",async(req,res)=>{
    const payload=req.body
    try {
        const data=new UserModel(payload)
        await data.save()
        res.send("data added")
        
    } catch (error) {
        console.log("something wrong in adding")
        console.log(error)
        
    }
})


userRouter.post("/users/login",async(req,res)=>{
    const {email,password}=req.body
    try {
        const data=await UserModel.find({email,password})
        if(data.length>0){
            const token=jwt.sign({course:"backend"},'masai')
            console.log(token)

            res.send("user is present")

        }else{
            res.send("no data")
        }
        
        
    } catch (error) {
        console.log("something wrong in adding")
        console.log(error)
        
    }
})

module.exports={
    userRouter
}