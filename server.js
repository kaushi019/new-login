const express =require('express');
const app=express();

//start the server
var PORT = process.env.PORT || 5500;
app.listen(PORT, function(){
    console.log("http://localhost:"+PORT);
});

//access frontend files
app.use(express.static(__dirname+'/frontend'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/frontend/html/index.html');
});