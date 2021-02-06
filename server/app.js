const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.use(express.json());
console.log("In the app.js")
app.use('/v1/api/',routes);
module.exports =app;
