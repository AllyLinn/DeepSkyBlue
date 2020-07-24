var myAudio = document.getElementById("myAudio");

$(".startbutton").click(startMusic);

myAudio.volume = 0.2;

function startMusic() {
    document.getElementById ("myAudio").play();
}
