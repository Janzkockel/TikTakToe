export function checkWin(gameStatus, myGameId) {
    for(let row=0; row<=2; row++){
        if(gameStatus[myGameId].gameStatus[row][0] !== 'u' && gameStatus[myGameId].gameStatus[row][0] === gameStatus[myGameId].gameStatus[row][1] && gameStatus[myGameId].gameStatus[row][1] === gameStatus[myGameId].gameStatus[row][2]){
            return gameStatus[myGameId].gameStatus[row][0];
        }
    }
    for(let col=0; col<=2; col++){
        if(gameStatus[myGameId].gameStatus[0][col] !== 'u' && gameStatus[myGameId].gameStatus[0][col] === gameStatus[myGameId].gameStatus[1][col] && gameStatus[myGameId].gameStatus[1][col] === gameStatus[myGameId].gameStatus[2][col]){
            console.log("col win");
            return gameStatus[myGameId].gameStatus[0][col];
        }
    }

    if(gameStatus[myGameId].gameStatus[0][0] !== 'u' && gameStatus[myGameId].gameStatus[0][0] === gameStatus[myGameId].gameStatus[1][1] && gameStatus[myGameId].gameStatus[1][1] === gameStatus[myGameId].gameStatus[2][2]){
        return gameStatus[myGameId].gameStatus[0][0];
    }
    if(gameStatus[myGameId].gameStatus[0][2] !== 'u' && gameStatus[myGameId].gameStatus[0][2] === gameStatus[myGameId].gameStatus[1][1] && gameStatus[myGameId].gameStatus[1][1] === gameStatus[myGameId].gameStatus[2][0]){
        return gameStatus[myGameId].gameStatus[0][2];
    }
    return "noWinner";

} 