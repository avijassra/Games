import { Injectable, EventEmitter } from '@angular/core';
import { AppService } from '../common.service';
import { ITicTacToeService } from '../tic-tac-toe/i.tic-tac-toe.service';
import { TicTacToeGameModel, TicTacToePlayerModel } from '../../models/tic-tac-toe.model';

@Injectable()
export class TicTacToeTwoPlayerService  implements ITicTacToeService {
    messageReceived: EventEmitter<string> = new EventEmitter();

    constructor(private appSrvc: AppService, 
        private gameModel: TicTacToeGameModel) {

        }
    
    startNewGame(): string {
        this.gameModel.addPlayers(new TicTacToePlayerModel(this.appSrvc.newGuid(), true, true));
        this.gameModel.addPlayers(new TicTacToePlayerModel(this.appSrvc.newGuid(), false, false));
        return this.gameModel.id;
    }

    onSend(): string {
        throw new Error("Method not implemented.");
    }

    onReceive(): string {
        throw new Error("Method not implemented.");
    }
}