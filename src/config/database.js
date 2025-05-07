const mongoose=require("mongoose");

const connectDB=async()=>{
  await mongoose.connect("mongodb+srv://janakinatarajan1997:jgDrk6QHLPjMUQoo@cluster0.zmohwzo.mongodb.net/devTinder")
}

module.exports={connectDB}
