let newGameButton = document.getElementById("generateNewGame");
let joinGameButton = document.getElementById("joinGameButton");
let gameIdInput = document.getElementById("gameIdInput");

newGameButton.onclick = generateNewGame;
joinGameButton.onclick = joinGame;

let newGameStatus = {};
let gameStatus = {};
async function getGameStatus() {
    const response = await fetch("https://pig-comic-heron.ngrok-free.app/getGameStatus");
    gameStatus = await response.json();

    console.log("Spiel Status erfolgreich bekommen: ", gameStatus);
}
async function joinGame() {

    await getGameStatus();
    console.log("Aktueller Spielstatus:", gameStatus);

    try {
        let id = gameIdInput.value;
        gameStatus[id]["player2-id"]; // man ruft es auf um zu checken ob es den wert/Variabel gibt        
        let namePlayerId = prompt("Enter your name:");
        gameStatus[id]["player2-id"] = namePlayerId;
        gameStatus[id][namePlayerId + "-symbol"] = "o";
        gameStatus[id][namePlayerId + "-color"] = "rgba(0, 255, 38, 0.85)";
        gameStatus[id][namePlayerId + "-replay"] = "u"; // u = undecided, its not false because we dont know it
        gameStatus[id][namePlayerId + "-resetBtn"] = false;

        localStorage.setItem("playerId", namePlayerId);
        localStorage.setItem("myGameId", id);

        const response2 = await fetch("/updateGameStatus", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(gameStatus)
        });
        window.location.href = '/TikTakToe';
    }
    catch (error) {
        alert("Game ID not found. Please check the ID and try again.");
        console.error("Error joining game:", error);
    }
}

function generateNewGame() {
    let namePlayerId = prompt("Enter your name:");
    localStorage.setItem("playerId", namePlayerId);

    let idOutput = document.getElementById("gameIdOutput");
    let newId = Math.floor(Math.random() * 100000);

    idOutput.innerText = "New Game ID: " + newId.toString();

    newGameStatus = {
        "player1-id": namePlayerId,
        "player2-id": "placeholder",
        [namePlayerId + "-symbol"]: "x",
        [namePlayerId + "-color"]: "red",
        "last-move": namePlayerId,
        "gameId": newId.toString(),
        "gameStatus":
            [["u", "u", "u"],
            ["u", "u", "u"],
            ["u", "u", "u"]],
        [namePlayerId + "-replay"]: "u",// u = undecided, its not false because we dont know it 
        [namePlayerId + "-resetBtn"]: false,
    };

    console.log("Sende neuen GameStatus:", JSON.stringify(newGameStatus));

    const response = fetch("/newGameStatus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGameStatus)
    });

    localStorage.setItem("myGameId", newId.toString());

    window.location.href = '/TikTakToe';
}

