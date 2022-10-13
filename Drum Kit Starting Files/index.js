var sound = new Audio("sounds/crash.mp3");

for (var x = 0; x < document.querySelectorAll(".drum").length; x++) {
    document.querySelectorAll("button")[x].addEventListener("click", function () {
        this.style.color = "white";

        var key = this.innerHTML;
        makeSound(key);
        animate(key);
    });

}

document.addEventListener("keydown", function (eventt) {
    makeSound(eventt.key);
    animate(eventt.key);
});

function makeSound(key){
    switch (key) {
        case "w" || "W":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a" || "A":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s" || "S":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d" || "D":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j" || "J":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k" || "K":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l" || "L":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            console.log(eventt.key);
            break;
    }
}

function animate(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){document.querySelector("."+key).classList.remove("pressed");},200);

}


