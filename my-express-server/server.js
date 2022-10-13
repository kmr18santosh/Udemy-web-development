const express = require("express");
const app = express();

app.get("/", function(req, res){

    res.send("<h1>Hello world</h1>");
    
});

app.get("/contact", function(req, res){

    res.send("<h1>Contact me on gmail: kmr18.santosh@gmail.com</h1>");
    
});


app.get("/about", function(req, res){

    res.send("<h1>Hey there, its about me page.</h1>");
    
});


app.get("/hobbies", function(req, res){

    res.send("<h1>I dont know</h1>");
    
});
app.listen(3000, function(){
    console.log('server started at the port no.-3000');
});