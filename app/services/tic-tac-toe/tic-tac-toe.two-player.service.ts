import { Injectable, EventEmitter } from '@angular/core';
import { AppService } from '../common.service';
import { ITicTacToeService } from '../tic-tac-toe/i.tic-tac-toe.service';
import { TicTacToeGameModel, TicTacToePlayerModel } from '../../models/tic-tac-toe.model';

@Injectable()
export class TicTacToeTwoPlayerService implements ITicTacToeService {
    messageReceived: EventEmitter<string> = new EventEmitter();
    changeActivePlayer: EventEmitter<null> = new EventEmitter();
    swapMarkers: EventEmitter<null> = new EventEmitter();

    constructor(appSrvc: AppService) {
    }

    startNewGame(gameModel: TicTacToeGameModel, playerModel: TicTacToePlayerModel): string {
        debugger;
        this.changeActivePlayer.emit();
        this.swapMarkers.emit();
        return gameModel.id;
    }

    onSend(): string {
        throw new Error("Method not implemented.");
    }

    onReceive(): string {
        throw new Error("Method not implemented.");
    }
}