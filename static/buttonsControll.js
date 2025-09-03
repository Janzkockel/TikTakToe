import { GameStatus } from "./script.js";
import { sendGameStatus } from "./sendGameStatus.js";
import { myGameId, playerId } from "./script.js";

let tl = document.getElementById("tl");
let tm = document.getElementById("tm");
let tr = document.getElementById("tr");

let ml = document.getElementById("ml");
let mm = document.getElementById("mm");
let mr = document.getElementById("mr");

let bl = document.getElementById("bl");
let bm = document.getElementById("bm");
let br = document.getElementById("br");

function tl_pressed() {
    if (GameStatus[myGameId].gameStatus[0][0] == "u") {
        if (playerId == GameStatus[myGameId]["last-move"]) {
            alert("It's not your turn!");
        }
        else {
            GameStatus[myGameId].gameStatus[0][0] = playerId;
            GameStatus[myGameId]["last-move"] = playerId;
            tl.style.backgroundColor = GameStatus[myGameId][playerId + "-color"];
            tl.innerText = GameStatus[myGameId][playerId + "-symbol"];
        }
        sendGameStatus(GameStatus);
    }   
}

function tm_pressed() {
    if (GameStatus[myGameId].gameStatus[0][1] == "u") {
        if (playerId == GameStatus[myGameId]["last-move"]) {
            alert("It's not your turn!");
        }
        else {
            GameStatus[myGameId].gameStatus[0][1] = playerId;
            GameStatus[myGameId]["last-move"] = playerId;
            tm.style.backgroundColor = GameStatus[myGameId][playerId + "-color"];
            tm.innerText = GameStatus[myGameId][playerId + "-symbol"];
        }
        sendGameStatus(GameStatus);
    }
}

function tr_pressed() {
    if (GameStatus[myGameId].gameStatus[0][2] == "u") {
        if (playerId == GameStatus[myGameId]["last-move"]) {
            alert("It's not your turn!");
        }
        else {
            GameStatus[myGameId].gameStatus[0][2] = playerId;
            GameStatus[myGameId]["last-move"] = playerId;
            tr.style.backgroundColor = GameStatus[myGameId][playerId + "-color"];
            tr.innerText = GameStatus[myGameId][playerId + "-symbol"];
        }
        sendGameStatus(GameStatus);
    }
}

function ml_pressed() {
    if (GameStatus[myGameId].gameStatus[1][0] == "u") {
        if (playerId == GameStatus[myGameId]["last-move"]) {
            alert("It's not your turn!");
        }
        else {
            GameStatus[myGameId].gameStatus[1][0] = playerId;
            GameStatus[myGameId]["last-move"] = playerId;
            ml.style.backgroundColor = GameStatus[myGameId][playerId + "-color"];
            ml.innerText = GameStatus[myGameId][playerId + "-symbol"];
        }
        sendGameStatus(GameStatus);
    }
}

function mm_pressed() {
    if (GameStatus[myGameId].gameStatus[1][1] == "u") {
        if (playerId == GameStatus[myGameId]["last-move"]) {
            alert("It's not your turn!");
        }
        else {
            GameStatus[myGameId].gameStatus[1][1] = playerId;
            GameStatus[myGameId]["last-move"] = playerId;
            mm.style.backgroundColor = GameStatus[myGameId][playerId + "-color"];
            mm.innerText = GameStatus[myGameId][playerId + "-symbol"];
        }
        sendGameStatus(GameStatus);
    }
}

function mr_pressed() {
    if (GameStatus[myGameId].gameStatus[1][2] == "u") {
        if (playerId == GameStatus[myGameId]["last-move"]) {
            alert("It's not your turn!");
        }
        else {
            GameStatus[myGameId].gameStatus[1][2] = playerId;
            GameStatus[myGameId]["last-move"] = playerId;
            mr.style.backgroundColor = GameStatus[myGameId][playerId + "-color"];
            mr.innerText = GameStatus[myGameId][playerId + "-symbol"];
        }
        sendGameStatus(GameStatus);
    }
}

function bl_pressed() {
    if (GameStatus[myGameId].gameStatus[2][0] == "u") {
        if (playerId == GameStatus[myGameId]["last-move"]) {
            alert("It's not your turn!");
        }
        else {
            GameStatus[myGameId].gameStatus[2][0] = playerId;
            GameStatus[myGameId]["last-move"] = playerId;
            bl.style.backgroundColor = GameStatus[myGameId][playerId + "-color"];
            bl.innerText = GameStatus[myGameId][playerId + "-symbol"];
        }
        sendGameStatus(GameStatus);
    }
}

function bm_pressed() {
    if (GameStatus[myGameId].gameStatus[2][1] == "u") {
        if (playerId == GameStatus[myGameId]["last-move"]) {
            alert("It's not your turn!");
        }
        else {
            GameStatus[myGameId].gameStatus[2][1] = playerId;
            GameStatus[myGameId]["last-move"] = playerId;
            bm.style.backgroundColor = GameStatus[myGameId][playerId + "-color"];
            bm.innerText = GameStatus[myGameId][playerId + "-symbol"];
        }
        sendGameStatus(GameStatus);
    }
}

function br_pressed() {
    if (GameStatus[myGameId].gameStatus[2][2] == "u") {
        if (playerId == GameStatus[myGameId]["last-move"]) {
            alert("It's not your turn!");
        }
        else {
            GameStatus[myGameId].gameStatus[2][2] = playerId;
            GameStatus[myGameId]["last-move"] = playerId;
            br.style.backgroundColor = GameStatus[myGameId][playerId + "-color"];
            br.innerText = GameStatus[myGameId][playerId + "-symbol"];
        }
        sendGameStatus(GameStatus);
    }
}


export { tl,tm,tr,ml,mm,mr,bl,bm,br, tl_pressed, tm_pressed, tr_pressed, ml_pressed, mm_pressed, mr_pressed, bl_pressed, bm_pressed, br_pressed };