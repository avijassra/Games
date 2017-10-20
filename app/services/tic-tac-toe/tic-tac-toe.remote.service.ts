import { Injectable, EventEmitter } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';

import { ITicTacToeService } from '../tic-tac-toe/i.tic-tac-toe.service';
import { TicTacToeGameModel, TicTacToePlayerModel, TicTacToeMarkerModel } from '../../models/tic-tac-toe.model';


@Injectable()
export class TicTacToeRemoteService implements ITicTacToeService {
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
        throw new Error("Method not implemented.");
    }
    onReceive(row:number, col:number, isMarkerX: boolean): void {
        throw new Error("Method not implemented.");
    }
}