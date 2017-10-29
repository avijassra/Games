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
    chatMessageGet: EventEmitter<string> = new EventEmitter();

    connection: HubConnection;
    startedConnection: Promise<void>;

    constructor() {
        debugger;
        this.connection = new HubConnection('/tictactoe');
        this.startedConnection = this.connection.start();

        this.connection.on('WaitingGames', (markerModel: TicTacToeMarkerModel) => {
            this.onReceive(markerModel);
        });

        this.connection.on('receive', (msg: string) => {
            debugger;
            this.onChatMessageGet(msg);
        });
    }

    startNewGame(gameModel: TicTacToeGameModel, marker: string): void {
        this.startedConnection
            .then(() => this.connection.invoke('NotifyForNewGame', gameModel.id));//, gameModel.name, marker));
    }

    onSend(markerModel: TicTacToeMarkerModel): void {
        this.startedConnection
            .then(() => this.connection.invoke('NotifyForNewGame', markerModel));
    }
    
    onReceive(markerModel: TicTacToeMarkerModel): void {
        this.messageReceived.emit(markerModel);
    }

    onChatMessageSend(msg:string): void {
        debugger;
        this.startedConnection
            .then(() => this.connection.invoke('send', msg));
    }

    onChatMessageGet(msg:string): void {
        debugger;
        this.chatMessageGet.emit(msg);
    }
}