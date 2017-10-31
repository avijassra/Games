import { Injectable, EventEmitter } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';

import { ITicTacToeService } from '../tic-tac-toe/i.tic-tac-toe.service';
import { TicTacToeGameModel, TicTacToePlayerModel, TicTacToeMarkerModel } from '../../models/tic-tac-toe.model';
import { PubSubService } from '../pubsub.service';

@Injectable()
export class TicTacToeRemoteService implements ITicTacToeService {
    gameStarted: EventEmitter<TicTacToePlayerModel> = new EventEmitter();
    updateGameBoard: EventEmitter<TicTacToeMarkerModel> = new EventEmitter();
    changeActivePlayer: EventEmitter<null> = new EventEmitter();
    swapMarkers: EventEmitter<null> = new EventEmitter();

    constructor(private pubSubSrvc: PubSubService) {
    }

    startNewGame(gameModel: TicTacToeGameModel, marker: string): void {
        this.pubSubSrvc.onRegisterNewGame(gameModel.id);
    }

    onSend(markerModel: TicTacToeMarkerModel): void {
    }

    onReceive(markerModel: TicTacToeMarkerModel): void {
    }
}