export interface ITicTacToeService {
    startNewGame(gameName: string, player1name: string, player2name: string): string;
    onSend(): string;
    onReceive(): string;
}