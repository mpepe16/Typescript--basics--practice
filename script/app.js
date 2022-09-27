"use strict";
/// <reference path="person.ts" />
class Player {
    formatName() {
        return this.name.toUpperCase();
    }
}
class Utility {
    static getInputValue(elementID) {
        const inputElement = document.getElementById(elementID);
        return inputElement.value;
    }
    static generatedropDown(shapes) {
        const dropdownElement = document.getElementById('dropdownElement');
        for (let i = 0; i < shapes.length; i++) {
            let option = shapes[i].name;
            let element = document.createElement('option');
            element.textContent = option;
            element.value = option;
            dropdownElement.appendChild(element);
        }
    }
}
/// <reference path="result.ts" />
class Scoreboard {
    constructor() {
        this.results = [];
    }
    addResult(newResult) {
        this.results.push(newResult);
    }
    updateScoreboard() {
        let output = '<h2>ScoreBoard</h2>';
        for (let i = 0; i < this.results.length; i++) {
            const result = this.results[i];
            output += '<h4>';
            output += result.playerName + ': ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
            output += '</h4>';
        }
        const scoresElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
    }
}
class Shape {
    constructor(centerX, centerY, name) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.name = name;
    }
    getX() {
        return this.centerX;
    }
    getY() {
        return this.centerY;
    }
}
/// <reference path="shape.ts" />
class Circle extends Shape {
    // Possible to use radius as a parameter property. Just adding as public radius in the constructor
    constructor(centerX, centerY, radius, name) {
        super(centerX, centerY, name);
        this.pi = 3.14;
        this.radius = radius;
    }
    logShape() {
        let instance = this.constructor;
        console.log(instance.name);
    }
    calculateAre() {
        return (this.radius * this.radius) * this.pi;
    }
}
/// <reference path="shape.ts" />
class Triangle extends Shape {
    constructor(side1, side2, side3, centerX, centerY, name) {
        super(centerX, centerY, name);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    logShape() {
        let instance = this.constructor;
        console.log(" I am a  " + instance.name + "and I got 3 sides .");
    }
    calculateArea() {
        let sides = [this.side1, this.side2, this.side3];
        let base = Math.max(...sides);
        return (this.height * base) / 2;
    }
}
/// <reference path="utility.ts" />
/// <reference path="result.ts" />
/// <reference path="player.ts" />
/// <reference path="scoreboard.ts" />
/// <reference path="shapes/shape.ts" />
/// <reference path="shapes/circle.ts" />
/// <reference path="shapes/triangle.ts" />
class Game {
    constructor(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new Scoreboard();
    }
    displayGame() {
        // create the html for the current game
        let gameForm = '';
        for (let i = 1; i <= this.problemCount; i++) {
            gameForm += '<div>';
            gameForm += '<label for="answer"' + i + '>';
            gameForm += String(this.factor) + ' x ' + i + ' = </label>';
            gameForm += '<div><input type="text" id="answer' + i + '" size="5" /></div>';
            gameForm += '</div>';
        }
        // add the new game to the page
        const gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;
        // enable the calculate score button
        document.getElementById('calculate').removeAttribute('disabled');
    }
    calculateScore() {
        let score = 0;
        // loop through the text boxes and calculate the number that are correct
        for (let i = 1; i <= this.problemCount; i++) {
            const answer = Number(Utility.getInputValue('answer' + i));
            if (i * this.factor === answer) {
                score++;
            }
        }
        // create a new result object to pass to the scoreboard
        const result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor
        };
        // add the result and update the scoreboard
        this.scoreboard.addResult(result);
        this.scoreboard.updateScoreboard();
        // disable the calculate score button
        document.getElementById('calculate').setAttribute('disabled', 'true');
    }
}
// This line below tells the compiler that the code in this file depends on the code in the player.ts
//This means that compiler automatically will compile the player.ts file whenever it compile the app.ts
/// <reference path="player.ts" />
/// <reference path="game.ts" />
let newGame;
let circle1 = new Circle(5, 5, 5, "Circle");
let triangle1 = new Triangle(1, 2, 3, 4, 5, "Triangle");
let shapes = [circle1];
console.log(circle1.logShape());
// add click handler to the start game button
document.getElementById('startGame').addEventListener('click', () => {
    const player = new Player();
    player.name = Utility.getInputValue('playerName');
    const problemCount = Number(Utility.getInputValue('problemCount'));
    const factor = Number(Utility.getInputValue('factor'));
    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});
// add click handler to the calculate score button
document.getElementById('calculate').addEventListener('click', () => {
    newGame.calculateScore();
});
document.getElementById('showOptions').addEventListener('click', () => {
    Utility.generatedropDown(shapes);
});
//# sourceMappingURL=app.js.map