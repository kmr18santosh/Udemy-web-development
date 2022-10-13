const express = require("express");
const https = require("https");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({ encoded: true }));

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/index.html");

});

app.post("/", function (req, res) {
    const query = req.body.cityName;
    const unit = "metric";
    const key = "efcb1d31de43792dd4ca560d063282ce";

    const url = "https://api.openweathermap.org/data/2.5/weather?appid=" + key + "&q=" + query + "&units=" + unit;
    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            console.log(data);
            var weatherData = JSON.parse(data);
            console.log(weatherData);
            var temp = weatherData.main.temp;
            console.log(temp);
            var weatherDesc = weatherData.weather[0].description;
            console.log(weatherDesc);
            var location = weatherData.name;
            var humidity = weatherData.main.humidity;
            var icon = weatherData.weather[0].icon;
            var imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<h1>The weather of " + location + " is " + weatherDesc + " and temperature is " + temp + " degree celcius</h1>");
            res.write("<p>The humidity is : " + humidity + "</p>");
            res.write("<img src='" + imageUrl + "'>");
            console.log(imageUrl);
            res.send();
        });


    });
});



app.listen(3000, function () {
    console.log("Server is running on the port 3000!");

});

