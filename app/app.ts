// This line below tells the compiler that the code in this file depends on the code in the player.ts
//This means that compiler automatically will compile the player.ts file whenever it compile the app.ts
/// <reference path="player.ts" />

const firstPlayer : Player = new Player();
firstPlayer.name = "First Player";
console.log(firstPlayer.formatName());


function startGame() {
    let playerName : string | undefined = getInputValue('playerName');
    logPlayer(playerName);
} 
document.getElementById('submitButton')!.addEventListener('click', startGame);


// The Game Player string represnt a default value. 

function logPlayer(name: string = 'Game player'): void{
    console.log(`New game starting with player ${name}`);
}
