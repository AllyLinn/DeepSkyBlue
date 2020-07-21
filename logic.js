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
    timer: 300,

}

let userList = [];

let compList = [];

function generateCompMove(){

}


function 

function showPattern(){

}

setInterval(resetGame, timer)

function resetGame(){
    gameInfo.gameCount = 0;
    gameInfo.timer = 300;
    userList = [];
    compList = [];

}

function pushToCompList(){
    compList.push(Math.floor(Math.random() * 4) + 1);
}