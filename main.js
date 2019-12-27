const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
const BLACK_KEYS = ["s", "d", "g", "h", "j"];

const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

keys.forEach(key => {
    key.addEventListener("click", () => playNote(key));
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
});

document.addEventListener("keydown", notnhac => {
    if (notnhac.repeat) return;
    const key = notnhac.key;
    const whiteKeyindex = WHITE_KEYS.indexOf(key);
    const blackKeyindex = BLACK_KEYS.indexOf(key);

    if (whiteKeyindex > -1) playNote(whiteKeys[whiteKeyindex]);
    if (blackKeyindex > -1) playNote(blackKeys[blackKeyindex]);
});

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add("active");
    noteAudio.addEventListener("ended", () => {
        key.classList.remove("active");
    });
}