let userScore = 0;
var count = 1;
var currentAns = [];
const colors = ["green", "red", "yellow", "blue"];

let getRandomNum = () => Math.floor(Math.random() * 4);

function giveCode() {
    let i = 0;
    while (i < count) {
        let x = colors[getRandomNum()];
        console.log(x);
        $("#" + x).fadeOut().fadeIn();
        let music = new Audio("./Sounds/" + x + ".mp3");
        music.play();
        currentAns.push(x);
        i++;
    }
}

$(document).keydown(function (event) {
    if (event.key === "Enter") {
        giveCode();
    }
});
