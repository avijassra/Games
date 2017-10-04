export interface ITicTacToeModel {
    Marked: number;
    IsWinningSequence: boolean;
}

export class TicTacToeModel implements ITicTacToeModel {
    public Marked: number;
    public IsWinningSequence: boolean;

    constructor() {
        this.Marked = -1;
        this.IsWinningSequence = false;
    }
}