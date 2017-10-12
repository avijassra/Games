import { Injectable, EventEmitter } from '@angular/core';

export interface ITicTacToeService {
    messageReceived: EventEmitter<string>;
    changeActivePlayer: EventEmitter<null>;
    swapMarkers: EventEmitter<null>;

    startNewGame(gameName: string, player1name: string, isMarkerX:boolean, player2name: string): string;
    onSend(): string;
    onReceive(): string;
}