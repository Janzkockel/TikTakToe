//ngrok http --domain=pig-comic-heron.ngrok-free.app 8080
import { getGameStatus } from "./getGameData.js";
import { checkWin } from "./winAlgorithm.js";
import { someoneWon } from "./someoneWon.js";
import { tl,tm,tr,ml,mm,mr,bl,bm,br, tl_pressed, tm_pressed, tr_pressed, ml_pressed, mm_pressed, mr_pressed, bl_pressed, bm_pressed, br_pressed } from "./buttonsControll.js";

tl.onclick = tl_pressed;
tm.onclick = tm_pressed;
tr.onclick = tr_pressed;

ml.onclick = ml_pressed;
mm.onclick = mm_pressed;
mr.onclick = mr_pressed;

bl.onclick = bl_pressed;
bm.onclick = bm_pressed;
br.onclick = br_pressed;

let gameIdOutput = document.getElementById("gameIdOutput");
let winnerIdOutput = document.getElementById("winnerIdOutput");
export let GameStatus = {};

export const myGameId = localStorage.getItem("myGameId");
gameIdOutput.innerText = "Game ID: " + myGameId;

export const playerId = localStorage.getItem("playerId");

async function updateGameStatus() {
    
    GameStatus = await getGameStatus(myGameId, playerId);

    let winner = checkWin(GameStatus, myGameId);    
    if(winner !== "noWinner"){
        someoneWon(winner);
    }
    
}

updateGameStatus();
setInterval(updateGameStatus, 1000);