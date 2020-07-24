var myAudio = document.getElementById("myAudio");

$(".startbutton").click(startMusic);

myAudio.volume = 0.1;

function startMusic() {
    document.getElementById ("myAudio").play();
}
