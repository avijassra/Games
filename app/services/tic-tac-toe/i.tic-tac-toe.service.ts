import { Injectable, EventEmitter } from '@angular/core';
import { TicTacToeGameModel, TicTacToePlayerModel } from '../../models/tic-tac-toe.model';

export interface ITicTacToeService {
    gameStarted: EventEmitter<null>;
    messageReceived: EventEmitter<string>;
    changeActivePlayer: EventEmitter<null>;
    swapMarkers: EventEmitter<null>;

    startNewGame(gameMode: TicTacToeGameModel, playerModel: TicTacToePlayerModel): void;
    onSend(): string;
    onReceive(): string;
}