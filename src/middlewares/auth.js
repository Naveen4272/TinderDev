const adminAuth=(req,res,next)=>{
  const token ="xyz";
  const isAdminAuthorized=token==="xyz";

if(!isAdminAuthorized){
  res.status(404).send("unauthorized admin request")
}else{
  next()
}
}


module.exports={adminAuth}