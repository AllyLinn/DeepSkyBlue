var myAudio = document.getElementById("myAudio");

$("#logo").click (startMusic);

myAudio.volume = 0.1;

function startMusic() {
    document.getElementById ("myAudio").play();
}