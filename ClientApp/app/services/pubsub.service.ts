import { Injectable, EventEmitter } from "@angular/core";
import { HubConnection } from '@aspnet/signalr-client';

@Injectable()
export class PubSubService {
    connection: HubConnection;
    startedConnection: Promise<void>;

    // chat
    incomingMessage: EventEmitter<string> = new EventEmitter();
    // Games
    gameWaitingForPlayers: EventEmitter<string> = new EventEmitter();

    constructor() {
        this.connection = new HubConnection('/games');
        this.startedConnection = this.connection.start();

        // chat
        this.connection.on('NewIncomingMessage', (msg: string) => {
            debugger;
            this.onIncomingMessage(msg);
        });

        this.connection.on('GamesWaitingPlayers', (gId: string) => {
            this.onGameWaitingForPlayers(gId);
        });
    }

    //chat
    onOutgoingMessage(msg: string): void{
        this.startedConnection
            .then(() => this.connection.invoke('MessageToPublish', msg));
    }

    onIncomingMessage(msg: string): void {
        this.incomingMessage.emit(msg);
    }

    onRegisterNewGame(gId: string): void {
        this.startedConnection
            .then(() => this.connection.invoke('RegisterNewGame', gId));
    }

    onGameWaitingForPlayers(gId: string): void {
        this.gameWaitingForPlayers.emit(gId)
    }
}