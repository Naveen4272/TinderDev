const express=require("express")

const app=express();

app.use("/hello",(req,res)=>{
  res.send("ahhahaha")
})
app.get("/hello",(req,res)=>{
  res.send("hello from the sever")
})

app.post(
  "/hello",(req,res)=>{
  res.send("data saved")
})
app.listen(3000,()=>{
  console.log(" server listening to the port 3000...");
  
})