const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'})
const connectionString = process.env.CONNECTION_STRING;
const port = process.env.PORT
console.log(port)
mongoose.connect(connectionString,{
  useCreateIndex:true,
  useFindAndModify:false,
  useNewUrlParser:true
}).then(() =>{
  console.log("DB is connected")
  const app = require('./app')
  app.listen(`${port}`)
}
)