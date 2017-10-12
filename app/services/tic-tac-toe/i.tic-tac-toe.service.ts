export interface ITicTacToeService {
    startNewGame(gameName: string, player1name: string, isMarkerX:boolean, player2name: string): string;
    onSend(): string;
    onReceive(): string;
}