let myResult: Result ={
    playerName: "Maria",
    score: 5,
    problemCount: 5,
    factor: 7
};

let player : Person = {
    name: "",
    formatName: function (): string {
        return `Hi ${this.name}`;
    }
}
