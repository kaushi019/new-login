const mongoose=require('mongoose');
const mongo_url= process.env.MONGO_DB_STRING || "mongodb+srv://kaushi019:kaushi019@cluster0.wnehu.mongodb.net/users?retryWrites=true&w=majority";
const optionJSON = {useUnifiedTopology:true,useNewUrlParser: true ,useCreateIndex: true};

module.exports.connect=(cb)=>{
    mongoose.connect(mongo_url,optionJSON,(err)=>{
        if(err)
            console.log("ERROR : "+err.message);
        else
            cb("DB Connected");
    });
}

module.exports.disconnect=()=>{
    mongoose.disconnect(()=>{
        console.log("DB Disconnected...");
    });
}