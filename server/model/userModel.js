const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email:{
    type:String,
    required:[true,'Email is mandatory']
  },
  userName:{
    type:String,
    required:[true,'UserName is mandatory']
  },
  mobileNo:{
    type:String,
    required:[true,'Mobile number is mandatory']
  },
  password:{
    type:String,
    required:[true,'Password is mandatory']
  },
  confirmPassword:{
    type:String,
    required:[true,'Confirm password is mandatory']
  }
})

const userModel = mongoose.model('users',userSchema)

module.exports =userModel;