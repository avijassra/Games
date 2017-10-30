import { Injectable, EventEmitter } from '@angular/core';
import { TicTacToeGameModel, TicTacToePlayerModel, TicTacToeMarkerModel } from '../../models/tic-tac-toe.model';

export interface ITicTacToeService {
    gameStarted: EventEmitter<TicTacToePlayerModel>;
    displayWaitingPlayers: EventEmitter<string>;
    messageReceived: EventEmitter<TicTacToeMarkerModel>;
    changeActivePlayer: EventEmitter<null>;
    swapMarkers: EventEmitter<null>;

    startNewGame(gameMode: TicTacToeGameModel, marker: string): void;
    onSend(markerModel: TicTacToeMarkerModel): void;
    onReceive(markerModel: TicTacToeMarkerModel): void;
}