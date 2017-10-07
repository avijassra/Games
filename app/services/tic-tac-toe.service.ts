import { Injectable, EventEmitter } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';

@Injectable()
export class TicTacToeService {
    messageReceived: EventEmitter<string> = new EventEmitter();

    connection: HubConnection;
    startedConnection: Promise<void>;

    constructor() {
        debugger;
        this.connection = new HubConnection('/tictactoe');
        this.startedConnection = this.connection.start();
        
        this.connection.on('send', (data: string) => {
            debugger;
                console.log(data);
                this.messageReceived.emit(data);
            });
    }

    messageReceivedEmitter() {
        debugger;
        return this.messageReceived;
    }

    send(message: string):void {
        debugger;
        this.startedConnection
            .then(() => this.connection.invoke('send', message));
    }   
}