document.getElementById("startGame").addEventListener("click", startGame);

let startScreen = document.getElementsByClassName("start-game")[0];
let playScreen = document.getElementsByClassName("play-game")[0];
let state = initState()
let game = prepareGame()

document.addEventListener('keyup', keyUpFun);
document.addEventListener.apply('keydown', keydownFun);

let availableCode = [
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight"
]
function keyUpFun(e) {
    if (availableCode.includes(e.code)) {
        state.key[e.code] = false;
    }
}

function keydownFun(e) {
    if (availableCode.includes(e.code)) {
        state.key[e.code] = true;
    }

}



function startGame(e) {
    startScreen.style.display = 'none';
    playScreen.style.display = 'block';

    start(state, game)
}