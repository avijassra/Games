import { Injectable, EventEmitter } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';
import { AppService } from '../common.service';
import { ITicTacToeService } from '../tic-tac-toe/i.tic-tac-toe.service';
import { TicTacToeGameModel, TicTacToePlayerModel } from '../../models/tic-tac-toe.model';


@Injectable()
export class TicTacToeRemoteService implements ITicTacToeService {
    gameStarted: EventEmitter<null> = new EventEmitter();
    messageReceived: EventEmitter<string> = new EventEmitter();
    changeActivePlayer: EventEmitter<null> = new EventEmitter();
    swapMarkers: EventEmitter<null> = new EventEmitter();

    constructor(appSrvc: AppService) {
    }

    startNewGame(gameModel: TicTacToeGameModel, playerModel: TicTacToePlayerModel): void {
        this.gameStarted.emit();
    }
    onSend(): string {
        throw new Error("Method not implemented.");
    }
    onReceive(): string {
        throw new Error("Method not implemented.");
    }
}