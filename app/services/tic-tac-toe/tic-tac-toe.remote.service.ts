import { Injectable, EventEmitter } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';
import { ITicTacToeService } from '../tic-tac-toe/i.tic-tac-toe.service';


@Injectable()
export class TicTacToeRemoteService implements ITicTacToeService {
    // messageReceived: EventEmitter<string> = new EventEmitter();

    // connection: HubConnection;
    // startedConnection: Promise<void>;

    // constructor() {
        
    // }

    // linkWithRemotePlayer(): void {
    //     this.connection = new HubConnection('/tictactoe');
    //     this.startedConnection = this.connection.start();
        
    //     this.connection.on('send', (data: string) => {
    //             console.log(data);
    //             this.messageReceived.emit(data);
    //         });
    // }

    // messageReceivedEmitter() {
    //     return this.messageReceived;
    // }

    // send(message: string):void {
    //     this.startedConnection
    //         .then(() => this.connection.invoke('send', message));
    // }
    
    startNewGame(): string {
        throw new Error("Method not implemented.");
    }
    onSend(): string {
        throw new Error("Method not implemented.");
    }
    onReceive(): string {
        throw new Error("Method not implemented.");
    }
}