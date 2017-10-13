import { Injectable, EventEmitter } from '@angular/core';
import { AppService } from '../common.service';
import { ITicTacToeService } from '../tic-tac-toe/i.tic-tac-toe.service';
import { TicTacToeGameModel, TicTacToePlayerModel } from '../../models/tic-tac-toe.model';

export class TicTacToeBaseService {
    protected messageReceived: EventEmitter<string> = new EventEmitter();
    protected changeActivePlayer: EventEmitter<null> = new EventEmitter();
    protected swapMarkers: EventEmitter<null> = new EventEmitter();

    constructor(protected appSrvc: AppService, 
        protected gameModel: TicTacToeGameModel) {

        }
    
    startNewGame(gameModel: TicTacToeGameModel, playerModel: TicTacToePlayerModel): string {
        this.changeActivePlayer.emit();
        this.swapMarkers.emit();
        return this.gameModel.id;
    }
}