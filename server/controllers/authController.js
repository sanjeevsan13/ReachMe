const userModel = require('./../model/userModel');
exports.signup = async(req,res,next)=>{
  const data = req.body.data
  console.log(data)
  try{
  await userModel.create(data)
  res.end()
  }
  catch(error){
   return res.status(422).json({
      status:'fail',
      errors:error
    })
  }
  
}