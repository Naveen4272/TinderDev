const express=require("express")

const app=express();
const {adminAuth}=require("./middlewares/auth")

app.use("/",adminAuth)


app.get("/admin/getAllData",(req,res)=>{

  res.send("all data send")
 
})

app.delete("/admin/deleteUser",(req,res)=>{
  res.send("user deleted")
})
app.listen(3000,()=>{
  console.log(" server listening to the port 3000...");
  
})