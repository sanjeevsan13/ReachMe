const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.use(express.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

console.log("In the app.js")
app.use('/v1/api',routes);
module.exports =app;
