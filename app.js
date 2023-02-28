const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser:true});
const port = 80;


//Define mongoose schema

var kittySchema = new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    address:String,
    desc:String
})
var Contact = mongoose.model('Contact', kittySchema); 

//EXPRESS SPECIFIC STUFF

app.use('/static', express.static('static'));// for serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine', 'pug');//set template engine as pug
app.set('views', path.join(__dirname, 'views'))// set the views directory


//ENDPOINTS
app.get('/home', (req,res)=>{
    const params = { }
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req,res)=>{
    const params = { }
    res.status(200).render('contact.pug', params);
})


//START OF THR SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});