let userScore = 0;
var count = 1;
var currentAns = [];
const colors = ["green", "red", "yellow", "blue"];
var stillAlive = true;
var waitingForUser = false;

let getRandomNum = () => Math.floor(Math.random() * 4);

function produceEffects(x) {
    $("#" + x).fadeOut().fadeIn();
    let music = new Audio("./Sounds/" + x + ".mp3");
    music.play();
}

function giveCode() {
    let i = 0;
    while (i < count) {
        let x = colors[getRandomNum()];
        console.log(x);
        produceEffects(x);
        currentAns.push(x);
        i++;
        setTimeout(() => { }, 1000);
    }
    waitingForUser = true;
}

function getUserCode(key) {
    let expectedKey = currentAns.shift();
    switch (key) {
        case 'g':
            key = "green";
            break;
        case 'r':
            key = "red";
            break;
        case 'b':
            key = "blue";
            break;
        case 'y':
            key = "yellow";
            break;
        default:
            key = "z";
            break;
    }
    if (key === expectedKey) {
        produceEffects(key);
        if (currentAns.length === 0) {
            userScore++;
            count++;
            waitingForUser = false;
            setTimeout(giveCode, 1500);
        }
    } else {
        let music = new Audio("./Sounds/wrong.mp3");
        music.play();
        console.log("lost");
        stillAlive = false;
        waitingForUser = false;
    }
}



$(document).keydown(function (event) {
    if (stillAlive) {
        if (waitingForUser) {
            getUserCode(event.key);
        } else {
            giveCode();
        }

    }
});
