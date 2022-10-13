const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
    name: "Apple",
    rating: 5,
    review: "snow white's favoutire"
});

const banana = new Fruit({
    name: "Banana",
    rating: 5,
    review: "snow white's load favoutire"
});

const kiwi = new Fruit({
    name: "kiwi",
    rating: 5,
    review: "rarely white's favoutire"
});
//fruit.save();
//console.log("done");

// Fruit.insertMany([kiwi,banana, apple], function(err){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Successfully added fruits!");
//     }
// });


Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }else{
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
        
    }
});







const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "Snow White",
    age: 25

});

//person.save(); console.log("Person task done");