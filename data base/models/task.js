const mongoose = require('mongoose');
const taskschema =new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        minlength:3
    },
    tasklistid:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    completed:{
        type:Boolean,
        default:false,
        required:true
    }
});
 
const task=mongoose.model('task',taskschema);

module.exports=task;