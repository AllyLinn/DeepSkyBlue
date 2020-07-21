// sound files -->



// https://s3.amazonaws.com/freecodecamp/simonSound1.mp3
// https://s3.amazonaws.com/freecodecamp/simonSound2.mp3
// https://s3.amazonaws.com/freecodecamp/simonSound3.mp3
// https://s3.amazonaws.com/freecodecamp/simonSound4.mp3

/* 
functions: 
start game
clear game

eval player input

timer reset every time new level in game

event listeners

create two arrays: computer generated pattern, and players patterns



display computer array(animation controller JS)

*/



var gameInfo = {
    gameCount: 0, 

    maxTimer: 300,
    currentTimer: 300,
    sound1: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
    sound2: "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
    sound3: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
    sound4: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
}

let userList = [];

let compList = [];

function setup() {
    gameInfo.startTimer=Date.now();
}

pushToCompList();


$(".button").click(playerInput)
//document.querySelector(".button").addEventListener('click',playerInput)
//.addEventListener("click", playerInput, false);

// var test = document.getElementsByClassName(".button");
// test

function playerInput() {
   var input =parseInt($(this).data("value"));
   userList[gameInfo.gameCount]=input;
    if (comparePattern() == true) {
        console.log(gameInfo.gameCount)
        if(gameInfo.gameCount==compList.length-1) {
            console.log("player passed the round")
            //this is for when the player passes a round
            pushToCompList();
            resetPlayer();
            showPattern();
            console.log(userList + "player list");
            gameInfo.currentTimer = gameInfo.maxTimer;
        } else {
        //this is when the player passes the check
        gameInfo.currentTimer = gameInfo.maxTimer;
        console.log(compList.length - 1);
        console.log(userList + "player list");
        gameInfo.gameCount+=1;
        }
    } else {
        resetGame();
    }

}
function comparePattern() {
    console.log(gameInfo.gameCount + "game count");
    if(userList[gameInfo.gameCount] == compList[gameInfo.gameCount]) {
        return true;
    }
    return false;
}

function showPattern(){
    console.log(compList + "comp list")
}
//setInterval(checkState, 1000);
function checkState() {
    console.log("tests")
    currentTimer-=1;
    if(currentTimer<=0) {
        resetGame();
    }
}
function resetPlayer() {
    gameInfo.gameCount=0;
    console.log(gameInfo.gameCount);
    for (let index = 0; index < compList.length; index++) {
        userList[index]=[];
    }
}

function resetGame(){
    alert("you lose");
    gameInfo.gameCount = 0;
    gameInfo.currentTimer = gameInfo.maxTimer;
    userList = [];
    compList = [];

}

function pushToCompList(){
    compList.push(Math.floor(Math.random() * 4));
    showPattern();
}
