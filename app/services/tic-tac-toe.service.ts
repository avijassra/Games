import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';

@Injectable()
export class TicTacToeService implements OnInit {
    messageReceived: EventEmitter<string> = new EventEmitter();

    connection: HubConnection;

    ngOnInit(): void {
        this.connection = new HubConnection('/tictactoe');
        
        this.connection.on('send', data => {
                console.log(data);
                this.messageReceived.emit(data);
            });
    }

    messageReceivedEmitter() {
        return this.messageReceived;
    }

    send(message: string):void {
        this.connection
            .start()
            .then(() => this.connection.invoke('send', message));
    }   
}