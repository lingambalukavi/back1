const mongoose =require('mongoose');

mongoose.Promise=global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/taskmanagerrdb')
.then(()=>{
    console.log("db connected succssfullly")
})

.catch((error)=>{
    console.log(error,"db is not connected")
})
module.export= mongoose;