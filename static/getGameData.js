export async function getGameStatus(gameId, playerId) {
    try {
        const response = await fetch("https://pig-comic-heron.ngrok-free.app/getGameStatus");

        const text = await response.json();
        console.log("Spiel Status erfolgreich bekommen: ", text[gameId]);

        let GameStatus = text;
        for (let y = 0; y <= 2; y++) {
            for (let x = 0; x <= 2; x++) {
                if (y == 0) {
                    if (GameStatus[gameId].gameStatus[y][x] != "u") {
                        if (x == 0) {
                            draw(gameId, playerId, GameStatus, "tl");
                        }
                        if (x == 1) {
                            draw(gameId, playerId, GameStatus, "tm");
                        }
                        if (x == 2) {
                            draw(gameId, playerId, GameStatus, "tr");
                        }
                    }
                }
                if (y == 1) {
                    if (GameStatus[gameId].gameStatus[y][x] != "u") {
                        if (x == 0) {
                            draw(gameId, playerId, GameStatus, "ml");
                        }
                        if (x == 1) {
                            draw(gameId, playerId, GameStatus, "mm");
                        }
                        if (x == 2) {
                            draw(gameId, playerId, GameStatus, "mr");
                        }

                    }
                }
                if (y == 2) {
                    if (GameStatus[gameId].gameStatus[y][x] != "u") {
                        if (x == 0) {
                            draw(gameId, playerId, GameStatus, "bl");
                        }
                        if (x == 1) {
                            draw(gameId, playerId, GameStatus, "bm");
                        }
                        if (x == 2) {
                            draw(gameId, playerId, GameStatus, "br");
                        }

                    }

                }
            }
        }
        return GameStatus;

    } catch (err) {
        console.error("Fehler beim Abrufen:", err);
        return ("Fehler beim Abrufen:", err);
    }
}

function draw(myGameId, playerId, GameStatus, coordinates) {

    switch (coordinates) {
        case "tl":
            if (playerId == GameStatus[myGameId].gameStatus[0][0]) {
                tl.style.backgroundColor = GameStatus[myGameId][playerId + "-color"];
                tl.innerText = GameStatus[myGameId][playerId + "-symbol"];
            }
            else {
                tl.style.backgroundColor = GameStatus[myGameId][GameStatus[myGameId].gameStatus[0][0] + "-color"];
                tl.innerText = GameStatus[myGameId][GameStatus[myGameId].gameStatus[0][0] + "-symbol"];
            }
            break;

        case "tm":
            if (playerId == GameStatus[myGameId].gameStatus[0][1]) {
                tm.style.backgroundColor = GameStatus[myGameId][playerId + "-color"];
                tm.innerText = GameStatus[myGameId][playerId + "-symbol"];
            }
            else {
                tm.style.backgroundColor = GameStatus[myGameId][GameStatus[myGameId].gameStatus[0][1] + "-color"];
                tm.innerText = GameStatus[myGameId][GameStatus[myGameId].gameStatus[0][1] + "-symbol"];
            }
            break;

        case "tr":
            if (playerId == GameStatus[myGameId].gameStatus[0][2]) {
                tr.style.backgroundColor = GameStatus[myGameId][playerId + "-color"];
                tr.innerText = GameStatus[myGameId][playerId + "-symbol"];
            }
            else {
                tr.style.backgroundColor = GameStatus[myGameId][GameStatus[myGameId].gameStatus[0][2] + "-color"];
                tr.innerText = GameStatus[myGameId][GameStatus[myGameId].gameStatus[0][2] + "-symbol"];
            }
            break;

        case "ml":
            if (playerId == GameStatus[myGameId].gameStatus[1][0]) {
                ml.style.backgroundColor = GameStatus[myGameId][playerId + "-color"];
                ml.innerText = GameStatus[myGameId][playerId + "-symbol"];
            }
            else {
                ml.style.backgroundColor = GameStatus[myGameId][GameStatus[myGameId].gameStatus[1][0] + "-color"];
                ml.innerText = GameStatus[myGameId][GameStatus[myGameId].gameStatus[1][0] + "-symbol"];
            }
            break;

        case "mm":
            if (playerId == GameStatus[myGameId].gameStatus[1][1]) {
                mm.style.backgroundColor = GameStatus[myGameId][playerId + "-color"];
                mm.innerText = GameStatus[myGameId][playerId + "-symbol"];
            }
            else {
                mm.style.backgroundColor = GameStatus[myGameId][GameStatus[myGameId].gameStatus[1][1] + "-color"];
                mm.innerText = GameStatus[myGameId][GameStatus[myGameId].gameStatus[1][1] + "-symbol"];
            }
            break;

        case "mr":
            if (playerId == GameStatus[myGameId].gameStatus[1][2]) {
                mr.style.backgroundColor = GameStatus[myGameId][playerId + "-color"];
                mr.innerText = GameStatus[myGameId][playerId + "-symbol"];
            }
            else {
                mr.style.backgroundColor = GameStatus[myGameId][GameStatus[myGameId].gameStatus[1][2] + "-color"];
                mr.innerText = GameStatus[myGameId][GameStatus[myGameId].gameStatus[1][2] + "-symbol"];
            }
            break;

        case "bl":
            if (playerId == GameStatus[myGameId].gameStatus[2][0]) {
                bl.style.backgroundColor = GameStatus[myGameId][playerId + "-color"];
                bl.innerText = GameStatus[myGameId][playerId + "-symbol"];
            }
            else {
                bl.style.backgroundColor = GameStatus[myGameId][GameStatus[myGameId].gameStatus[2][0] + "-color"];
                bl.innerText = GameStatus[myGameId][GameStatus[myGameId].gameStatus[2][0] + "-symbol"];
            }
            break;

        case "bm":
            if (playerId == GameStatus[myGameId].gameStatus[2][1]) {
                bm.style.backgroundColor = GameStatus[myGameId][playerId + "-color"];
                bm.innerText = GameStatus[myGameId][playerId + "-symbol"];
            }
            else {
                bm.style.backgroundColor = GameStatus[myGameId][GameStatus[myGameId].gameStatus[2][1] + "-color"];
                bm.innerText = GameStatus[myGameId][GameStatus[myGameId].gameStatus[2][1] + "-symbol"];
            }
            break;

        case "br":
            if (playerId == GameStatus[myGameId].gameStatus[2][2]) {
                br.style.backgroundColor = GameStatus[myGameId][playerId + "-color"];
                br.innerText = GameStatus[myGameId][playerId + "-symbol"];
            }
            else {
                br.style.backgroundColor = GameStatus[myGameId][GameStatus[myGameId].gameStatus[2][2] + "-color"];
                br.innerText = GameStatus[myGameId][GameStatus[myGameId].gameStatus[2][2] + "-symbol"];
            }
            break;

    }
}