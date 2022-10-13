const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");           
});

app.post("/", function(req,res){
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;

    var data = {
        members: [
            

        ]


    }
});



app.listen(3000, function() {
   console.log("server running at port 3000!!!") 
});

//a5090b755767ea28b1a7108a2a047d56-us11
//2ab5bdeae8