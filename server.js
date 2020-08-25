const express =require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const dbconnect=require('./backend/DB/dbconnect');
const router= express.Router();
const app=express();

dbconnect.connect((cb)=>{
    console.log(cb);
});

//start the server
var PORT = process.env.PORT || 5500;
app.listen(PORT, function(){
    console.log("http://localhost:"+PORT);
});

//access files
app.use(express.static(__dirname+'/frontend'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/",router);
app.use("/users",require('./backend/routes/routes'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/frontend/html/index.html');
});

// app.post('/users', (req, res) => {
//     console.log(req.body);
//     res.json(req.body);
//   });