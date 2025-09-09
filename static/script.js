//ngrok http --domain=pig-comic-heron.ngrok-free.app 8080
import { getGameStatus } from "./getGameData.js";
import { checkWin } from "./winAlgorithm.js";
import { someoneWon } from "./someoneWon.js";
import { tl, tm, tr, ml, mm, mr, bl, bm, br, tl_pressed, tm_pressed, tr_pressed, ml_pressed, mm_pressed, mr_pressed, bl_pressed, bm_pressed, br_pressed } from "./buttonsControll.js";
import { replay_btn, replay, reset_buttons } from "./replay_anotherGame.js";
import { sendGameStatus } from "./sendGameStatus.js";

tl.onclick = tl_pressed;
tm.onclick = tm_pressed;
tr.onclick = tr_pressed;

ml.onclick = ml_pressed;
mm.onclick = mm_pressed;
mr.onclick = mr_pressed;

bl.onclick = bl_pressed;
bm.onclick = bm_pressed;
br.onclick = br_pressed;

replay.onclick = replay_btn;

export let gameIdOutput = document.getElementById("gameIdOutput");
export let GameStatus = {};

export const myGameId = localStorage.getItem("myGameId");
gameIdOutput.innerText = "Game ID: " + myGameId;

export const playerId = localStorage.getItem("playerId");

async function updateGameStatus() {

    GameStatus = await getGameStatus(myGameId, playerId);

    let winner = checkWin(GameStatus, myGameId);
    if (winner !== "noWinner") {
        someoneWon(winner, GameStatus, myGameId, playerId);
    }
        
    if (GameStatus[myGameId][playerId + "-resetBtn"]) {
        
        reset_buttons();
        GameStatus[myGameId][playerId + "-resetBtn"] = false;
        console.log("Both players agreed to replay. Game reset.");
        sendGameStatus(GameStatus);
    }
}

updateGameStatus();
setInterval(updateGameStatus, 2500);