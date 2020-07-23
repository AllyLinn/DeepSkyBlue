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
    maxTimer: 4,
    currentTimer: 4,

    timerPaused : false,
    hasClicked: false
}

let userList = [];

let compList = [];

var highscore;

let button;

function setup() {
    gameInfo.startTimer=Date.now();
}

pushToCompList();
playback();

$(".individbutton").click(buttonAnimation);
$(".individbutton").click(playerInput);
//document.querySelector(".button").addEventListener('click',playerInput)
//.addEventListener("click", playerInput, false);

// var test = document.getElementsByClassName(".button");
// test

function playerInput() {
   var input = parseInt($(this).data("value"));
   userList[gameInfo.gameCount] = input;
    if (comparePattern() == true) {
        if(gameInfo.gameCount == compList.length-1) {
            console.log("player passed the round");
            //this is for when the player passes a round
            pushToCompList();
            resetPlayer();
            setTimeout(function() {playback()},800)
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
      setTimeout(() => {
          resetGame()
      }, 1000); 
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
    console.log(gameInfo.timerPaused);
    if(gameInfo.timerPaused==false){
        gameInfo.currentTimer-=1;
        $(".timer").text(gameInfo.currentTimer);
        if(gameInfo.currentTimer<=0) {
            resetGame();
        }
    }else{
        $(".timer").text("Timer is paused.");
        resetTimer();
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
    alert("You lost. Press 'OK' to start a new game.");
    gameInfo.gameCount = 0;
    resetTimer();
    userList = [];
    compList = [];
    pushToCompList();
    playback();
}

function pushToCompList(){
    compList.push(Math.floor(Math.random() * 4));
}

function buttonAnimation(){
            $(this).attr("src", "https://c190stash.imfast.io/" + parseInt($(this).data("value")).toString() + "_2.png");
            button = this
            playSound($(this).data("value"));
            setTimeout(function()
            {$(button).attr("src", "https://c190stash.imfast.io/" + parseInt($(button).data("value")).toString() + "_1.png");
        }, 300);
}
function buttonAnimationPlay(thisIs) {
    $(thisIs).attr("src", "https://c190stash.imfast.io/" + parseInt($(thisIs).data("value")).toString() + "_2.png");
    button = thisIs
    playSound($(thisIs).data("value"));
    setTimeout(function ()
    {
        $(button).attr("src", "https://c190stash.imfast.io/" + parseInt($(button).data("value")).toString() + "_1.png");
    }, 300);
}
function playSound(e){
let soundVar = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound" + (parseFloat(e)+1).toString() + ".mp3");
    soundVar.play();
}

function playback(){
    console.log("geting called")
    console.log(gameInfo.timerPaused);
    let addional = 0;
    gameInfo.timerPaused = true;
    setTimeout(function () { gameInfo.timerPaused = false; },500*compList.length)
    for (const element of compList) {
        setTimeout( function() {
        $(".individbutton").each(function ()
        {
            if (parseInt($(this).data("value")) == element)
            {
                buttonAnimationPlay(this);
            }
        });
    },500 + addional);
    addional+=500;
    }
    console.log("done calling")
};



