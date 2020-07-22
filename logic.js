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
    maxTimer: 30,
    currentTimer: 30,
    sound1: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
    sound2: "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
    sound3: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
    sound4: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
}

let userList = [];

let compList = [];

var highscore

function setup() {
    gameInfo.startTimer=Date.now();
}

pushToCompList();


$(".individbutton").click(playerInput)
//document.querySelector(".button").addEventListener('click',playerInput)
//.addEventListener("click", playerInput, false);

// var test = document.getElementsByClassName(".button");
// test

function playerInput() {
   var input =parseInt($(this).data("value"));
   userList[gameInfo.gameCount]=input;
    if (comparePattern() == true) {
        if(gameInfo.gameCount==compList.length-1) {
            
            console.log("player passed the round")
            //this is for when the player passes a round
            pushToCompList();
            resetPlayer();
            console.log(userList + " player list");
            gameInfo.currentTimer = gameInfo.maxTimer;
        } else {
        //this is when the player passes the check but not the round
        resetTimer();
        gameInfo.currentTimer = gameInfo.maxTimer;
        console.log(userList + " player list");
        gameInfo.gameCount+=1;
        }
    } else {
        if(compList.length>highscore) {
         highscore= compList.length;
        }
        resetGame();
    }

}
function comparePattern() {
    if(userList[gameInfo.gameCount] == compList[gameInfo.gameCount]) {
        return true;
    }
    return false;
}

function showPattern(){
    console.log(compList + " comp list")
}

setInterval(timerState, 1000);
function timerState() {
    
    gameInfo.currentTimer-=1;
    $(".timer").text(gameInfo.currentTimer);
    console.log(gameInfo.currentTimer)
    if(gameInfo.currentTimer<=0) {
        resetGame();
    }
}
function resetTimer() {
    gameInfo.currentTimer = gameInfo.maxTimer;
}
function resetPlayer() {
    gameInfo.currentTimer = gameInfo.maxTimer;
    gameInfo.gameCount=0;
    for (let index = 0; index < compList.length; index++) {
        userList[index]=[];
    }
}

function resetGame(){
    alert("you lose");
    gameInfo.gameCount = 0;
    resetTimer();
    userList = [];
    compList = [];
    pushToCompList();

}

function pushToCompList(){
    compList.push(Math.floor(Math.random() * 4));
    showPattern();
}
