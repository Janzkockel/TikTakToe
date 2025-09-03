export function someoneWon(winner){
    tl.disabled = true;
    tm.disabled = true;
    tr.disabled = true;

    ml.disabled = true;
    mm.disabled = true;
    mr.disabled = true;

    bl.disabled = true;
    bm.disabled = true;
    br.disabled = true;

gameIdOutput.innerText = "Winner is:";
gameIdOutput.style.fontSize = "3.5vw"; 
gameIdOutput.style.fontWeight = "600";
gameIdOutput.style.color = "#ffffff";
gameIdOutput.style.fontFamily = "'Arial Black', Arial, sans-serif";
gameIdOutput.style.letterSpacing = "0.1vw";
gameIdOutput.style.margin = "0";

winnerIdOutput.innerText = winner; 
winnerIdOutput.style.fontSize = "5vw"; 
winnerIdOutput.style.fontWeight = "700";
winnerIdOutput.style.color = "#ffcc33";
winnerIdOutput.style.fontFamily = "'Arial Black', Arial, sans-serif";
winnerIdOutput.style.letterSpacing = "0.2vw";
winnerIdOutput.style.fontStyle = "italic"; 
winnerIdOutput.style.textShadow = `
    0 0 0.2vw #fff, 
    0 0 0.4vw #fff, 
    0 0 0.6vw #ffcc33, 
    0 0 0.8vw #ffcc33
`;
winnerIdOutput.style.margin = "0";

}