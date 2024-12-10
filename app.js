var express = require('express')
var userRouter = require('./controller/userController')
const mongoose = require('mongoose');

var app = express()
const mongoURI = 'mongodb://127.0.0.1:27017/NodeApp'; //  MongoDB URI


mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });


app.use(express.json())
app.use('/', userRouter)
var http = require('http')
var server = http.createServer(app)
server.listen(3000, () => {
    console.log('server started !');
})