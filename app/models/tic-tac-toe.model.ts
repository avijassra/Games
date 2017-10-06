export interface ITicTacToeModel {
    Marked?: boolean;
    IsWinningSequence: boolean;
}

export class TicTacToeModel implements ITicTacToeModel {
    public Marked?: boolean;
    public IsWinningSequence: boolean;

    constructor() {
        this.Marked = null;
        this.IsWinningSequence = false;
    }
}