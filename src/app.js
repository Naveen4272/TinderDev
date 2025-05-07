const express=require("express")
 const{connectDB}=require("./config/database")
const app=express()
const User=require("./models/user")

app.post("/signup",async(req,res)=>{
  const user= new User({
    firstName:"naveen"
  })
  await user.save()
  res.send("user saved")
})

connectDB().then(()=>{
  console.log("database connected successfully...");
  app.listen(3000,()=>{
  console.log(" server listening to the port 3000...");
    
  })
}).catch((err)=>{
  console.error("error connecting"+err)
})


