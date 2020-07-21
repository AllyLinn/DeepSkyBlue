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
    maxTimer: 3000,
    currentTimer: 3000,
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
$(".button").click(playerInput)
//document.querySelector(".button").addEventListener('click',playerInput)
//.addEventListener("click", playerInput, false);

// var test = document.getElementsByClassName(".button");
// test

function playerInput() {
    console.log("test")
    console.log(this);
   var input = this.data-value;
   console.log(input);

    if (comparePattern() == true) {
        if(gameCount>=compList.length-1) {
            //this is for when the player passes a round
            pushToCompList();
            resetPlayer();
            showPattern();
            console.log(playerList + "player list");
            gameInfo.currentTimer = gameInfo.maxTimer();
        }
        //this is when the player passes the check
        gameInfo.gameCount+=1;
        gameInfo.currentTimer = gameInfo.maxTimer();
        console.log(playerList + "player list");
    } else {
        resetGame();
    }

}
function comparePattern() {
    if(userList[gameInfo.gameCount] === compList[gameInfo.gameCount]) {
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
    for (let index = 0; index < compList.length; index++) {
        userList[index]=[];
    }
}

function resetGame(){
    gameInfo.gameCount = 0;
    gameInfo.currentTimer = gameInfo.maxTimer;
    userList = [];
    compList = [];

}

function pushToCompList(){
    compList.push(Math.floor(Math.random() * 4) + 1);
}
