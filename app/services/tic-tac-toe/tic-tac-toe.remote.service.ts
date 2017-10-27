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

    connection: HubConnection;
    startedConnection: Promise<void>;

    constructor() {
        this.connection = new HubConnection('/tictactoe');
        this.startedConnection = this.connection.start();

        this.connection.on('send', (markerModel: TicTacToeMarkerModel) => {
            this.onReceive(markerModel);
        });
    }

    startNewGame(gameModel: TicTacToeGameModel): void {
        //this.tic
    }


    onSend(markerModel: TicTacToeMarkerModel): void {
        this.startedConnection
            .then(() => this.connection.invoke('send', markerModel));
    }
    
    onReceive(markerModel: TicTacToeMarkerModel): void {
        this.messageReceived.emit(markerModel);
    }
}