import { Injectable, EventEmitter } from '@angular/core';
import { TicTacToeGameModel, TicTacToePlayerModel } from '../../models/tic-tac-toe.model';

export interface ITicTacToeService {
    messageReceived: EventEmitter<string>;
    changeActivePlayer: EventEmitter<null>;
    swapMarkers: EventEmitter<null>;

    startNewGame(gameMode: TicTacToeGameModel, playerModel: TicTacToePlayerModel): string;
    onSend(): string;
    onReceive(): string;
}