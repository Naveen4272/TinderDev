const express=require("express")

const app=express();


app.use("/user",(req,res,next)=>{
  console.log("1st");
  
  next()
},(req,res,next)=>{
  console.log("2nd");
  
  next()
})
app.use("/user",(req,res,next)=>{
  console.log("3rd");

  
})
app.listen(3000,()=>{
  console.log(" server listening to the port 3000...");
  
})