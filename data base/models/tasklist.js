const mongoose = require('mongoose');
const tasklistschema =new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        minlength:3
    }
});
 
const tasklist=mongoose.model('tasklist',tasklistschema);

module.exports=tasklist;