const express = require('express');
const app = express();
const mongoose=require('./data base/mongoose');
const tasklist=require('./data base/models/tasklist');
const task=require('./data base/models/task');

app.use(function (req, res, next) {

 res.setHeader('Access-Control-Allow-Origin', '*');

 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

 res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 next();
});

app.use(express.json());

app.get('./tasklist',(req, res)=>{
    tasklist.find({})
    .then((lists)=>{res.send(lists)})
    .catch((error)=>{console.log(error)});
});
app.post('/tasklists',(req,res)=>{
    console.log("hello i am insde post method")
})

app.listen(3000, ()=>{
    console.log ("server start on port 150502 !");
});
