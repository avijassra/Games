import { Injectable, EventEmitter } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';

import { ITicTacToeService } from '../tic-tac-toe/i.tic-tac-toe.service';
import { TicTacToeGameModel, TicTacToePlayerModel, TicTacToeMarkerModel } from '../../models/tic-tac-toe.model';


@Injectable()
export class TicTacToeRemoteService implements ITicTacToeService {
    gameStarted: EventEmitter<TicTacToePlayerModel> = new EventEmitter();
    messageReceived: EventEmitter<TicTacToeMarkerModel> = new EventEmitter();
    displayWaitingPlayers: EventEmitter<string> = new EventEmitter();
    changeActivePlayer: EventEmitter<null> = new EventEmitter();
    swapMarkers: EventEmitter<null> = new EventEmitter();
    chatMessageGet: EventEmitter<string> = new EventEmitter();

    connection: HubConnection;
    startedConnection: Promise<void>;

    constructor() {
        debugger;
        this.connection = new HubConnection('/tictactoe');
        this.startedConnection = this.connection.start();

        this.connection.on('DisplayWaitingPlayer', (gId: string) => {
            this.onDisplayWaitingPlayer(gId);
        });

        this.connection.on('receive', (msg: string) => {
            debugger;
            this.onChatMessageGet(msg);
        });
    }

    startNewGame(gameModel: TicTacToeGameModel, marker: string): void {
        debugger;
        this.startedConnection
            .then(() => this.connection.invoke('RegisterNewGame', gameModel.id));//, gameModel.name, marker));
    }

    onSend(markerModel: TicTacToeMarkerModel): void {
        debugger;
        this.startedConnection
            .then(() => this.connection.invoke('NotifyForNewGame', markerModel));
    }
    
    onDisplayWaitingPlayer(game: string): void {
        this.displayWaitingPlayers.emit(game);
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