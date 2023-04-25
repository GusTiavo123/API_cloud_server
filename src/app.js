const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoute');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/',userRouter);

module.exports = app;