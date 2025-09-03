import { sendGameStatus } from "./sendGameStatus.js";
import { getGameStatus } from "./getGameData.js";
import { myGameId, playerId, gameIdOutput } from "./script.js";
import { tl, tm, tr, ml, mm, mr, bl, bm, br } from "./buttonsControll.js";

export let replay = document.getElementById("replay_btn");
export let new_game = document.getElementById("new_game_btn");

export async function replay_btn() {
    let gameStatus = await getGameStatus(myGameId, playerId);
    gameStatus[myGameId][playerId + "-replay"] = true;
    sendGameStatus(gameStatus);

}
export function reset_buttons() {

 
    winnerIdOutput.innerText = "";

    gameIdOutput.style.fontSize = "";
    gameIdOutput.style.fontWeight = "";
    gameIdOutput.style.color = "";
    gameIdOutput.style.fontFamily = "";
    gameIdOutput.style.letterSpacing = "";
    gameIdOutput.style.margin = "";
    gameIdOutput.innerText = "Game ID: " + myGameId;

    tl.style.backgroundColor = "#ffffff10";
    tl.innerText = "";
    tl.disabled = false;

    tm.style.backgroundColor = "#ffffff10";
    tm.innerText = "";
    tm.disabled = false;

    tr.style.backgroundColor = "#ffffff10";
    tr.innerText = "";
    tr.disabled = false;

    ml.style.backgroundColor = "#ffffff10";
    ml.innerText = "";
    ml.disabled = false;

    mm.style.backgroundColor = "#ffffff10";
    mm.innerText = "";
    mm.disabled = false;

    mr.style.backgroundColor = "#ffffff10";
    mr.innerText = "";
    mr.disabled = false;

    bl.style.backgroundColor = "#ffffff10";
    bl.innerText = "";
    bl.disabled = false;

    bm.style.backgroundColor = "#ffffff10";
    bm.innerText = "";
    bm.disabled = false;

    br.style.backgroundColor = "#ffffff10";
    br.innerText = "";
    br.disabled = false;

    replay.style.visibility = "hidden";
    new_game.style.visibility = "hidden";

    console.log("Buttons reseted");
}