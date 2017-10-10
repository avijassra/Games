import { Injectable, EventEmitter } from '@angular/core';
import { AppService } from '../common.service';
import { ITicTacToeService } from '../tic-tac-toe/i.tic-tac-toe.service';
import { TicTacToeBaseService } from '../tic-tac-toe/tic-tac-toe.base.service';
import { TicTacToeGameModel, TicTacToePlayerModel } from '../../models/tic-tac-toe.model';

@Injectable()
export class TicTacToeTwoPlayerService extends TicTacToeBaseService implements ITicTacToeService {
    constructor(appSrvc: AppService, gameModel: TicTacToeGameModel) {
            super(appSrvc, gameModel);
        }

    onSend(): string {
        throw new Error("Method not implemented.");
    }

    onReceive(): string {
        throw new Error("Method not implemented.");
    }
}