// This line below tells the compiler that the code in this file depends on the code in the player.ts
//This means that compiler automatically will compile the player.ts file whenever it compile the app.ts
/// <reference path="player.ts" />
/// <reference path="game.ts" />



let newGame: Game;

let circle1 : Circle = new Circle(5,5,5, "Circle");
let triangle1 : Triangle = new Triangle(1,2,3,4,5, "Triangle");
let shapes = [circle1,triangle1];
console.log(circle1.logShape());
// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
  const player: Player = new Player();
  player.name = Utility.getInputValue('playerName');

  const problemCount: number = Number(Utility.getInputValue('problemCount'));
  const factor: number = Number(Utility.getInputValue('factor'));

  newGame = new Game(player, problemCount, factor);
  newGame.displayGame();
  
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
  newGame.calculateScore();
});
document.getElementById('showOptions')!.addEventListener('click', () => {
  Utility.generatedropDown(shapes);
});
