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

    startNewGame(gameModel: TicTacToeGameModel): void {
        this.gameStarted.emit();
    }

    onSend(row:number, col:number, isMarkerX: boolean): void {
        this.onReceive(row, col, isMarkerX);
    }

    onReceive(row:number, col:number, isMarkerX: boolean): void {
        this.messageReceived.emit(new TicTacToeMarkerModel(row, col, isMarkerX));
        this.changeActivePlayer.emit();
    }
}