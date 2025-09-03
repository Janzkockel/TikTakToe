export async function sendGameStatus(GameStatus) {
    console.log("Sende GameStatus:", GameStatus);
    const response = await fetch("/updateGameStatus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(GameStatus)
    });
}