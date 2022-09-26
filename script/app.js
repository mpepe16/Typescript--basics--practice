"use strict";
/// <reference path="person.ts" />
class Player {
    formatName() {
        return this.name.toUpperCase();
    }
}
// This line below tells the compiler that the code in this file depends on the code in the player.ts
//This means that compiler automatically will compile the player.ts file whenever it compile the app.ts
/// <reference path="player.ts" />
const firstPlayer = new Player();
firstPlayer.name = "First Player";
console.log(firstPlayer.formatName());
function startGame() {
    let playerName = getInputValue('playerName');
    logPlayer(playerName);
}
document.getElementById('submitButton').addEventListener('click', startGame);
function getInputValue(elementId) {
    const inputElement = document.getElementById(elementId);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
// The Game Player string represnt a default value. 
function logPlayer(name = 'Game player') {
    console.log(`New game starting with player ${name}`);
}
//# sourceMappingURL=app.js.map