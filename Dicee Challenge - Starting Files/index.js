var a = Math.floor(1+Math.random()*6);
var b = Math.floor(1+Math.random()*6);

var player1 = "images/dice" + String(a) + ".png";
var player2 = "images/dice" + String(b) + ".png";

document.querySelectorAll("img")[0].setAttribute("src", player1);
document.querySelectorAll("img")[1].setAttribute("src", player2);

console.log("playes1:"+a);
console.log("playes2:"+b);

if (a>b){
    document.querySelector("h1").innerHTML=("Player1 Won");
}
else if (b>a){
    document.querySelector("h1").innerHTML=("Player2 Won");
}
else{
    document.querySelector("h1").innerHTML=("Draw");
}
