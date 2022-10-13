const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var a = Number(req.body.num1);
    var b = Number(req.body.num2);
    var result = a+b;
    res.send("the result is:" + result);
    
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var wt = parseFloat(req.body.weight);
    var ht = parseFloat(req.body.height);
    var bmi = wt / (ht * ht);
    res.send("Your BMI is: " + bmi);
});

app.listen(3000, function(){
    console.log("server started at port 3000");
});