import { Injectable, EventEmitter } from '@angular/core';
import { TicTacToeGameModel, TicTacToePlayerModel, TicTacToeMarkerModel } from '../../models/tic-tac-toe.model';

export interface ITicTacToeService {
    gameStarted: EventEmitter<TicTacToePlayerModel>;
    messageReceived: EventEmitter<TicTacToeMarkerModel>;
    changeActivePlayer: EventEmitter<null>;
    swapMarkers: EventEmitter<null>;

    startNewGame(gameMode: TicTacToeGameModel): void;
    onSend(row:number, col:number, marker: string): void;
    onReceive(row:number, col:number, marker: string): void;
}