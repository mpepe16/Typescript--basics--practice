/// <reference path="utility.ts" />
/// <reference path="result.ts" />
/// <reference path="player.ts" />
/// <reference path="scoreboard.ts" />

class Game {
    private scoreBoard :ScoreBoard = new ScoreBoard();
    player :Player;
    problemCount :number;
    factor: number;

    constructor(newPlayer :Player, numOfProblems :number, multFactor:number) {
        this.problemCount = numOfProblems;
        this.factor = multFactor;
        this.player = newPlayer;
    }
}
