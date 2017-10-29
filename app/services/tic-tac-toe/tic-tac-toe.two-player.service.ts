import { Injectable, EventEmitter } from '@angular/core';

import { ITicTacToeService } from '../tic-tac-toe/i.tic-tac-toe.service';
import { TicTacToeGameModel, TicTacToePlayerModel, TicTacToeMarkerModel } from '../../models/tic-tac-toe.model';

@Injectable()
export class TicTacToeTwoPlayerService implements ITicTacToeService {
    gameStarted: EventEmitter<TicTacToePlayerModel> = new EventEmitter();
    messageReceived: EventEmitter<TicTacToeMarkerModel> = new EventEmitter();
    changeActivePlayer: EventEmitter<null> = new EventEmitter();
    swapMarkers: EventEmitter<null> = new EventEmitter();

    constructor() {
    }

    startNewGame(gameModel: TicTacToeGameModel, marker: string): void {
        this.gameStarted.emit();
    }

    onSend(markerModel: TicTacToeMarkerModel): void {
        this.onReceive(markerModel);
    }

    onReceive(markerModel: TicTacToeMarkerModel): void {
        this.messageReceived.emit(markerModel);
        this.changeActivePlayer.emit();
    }
}