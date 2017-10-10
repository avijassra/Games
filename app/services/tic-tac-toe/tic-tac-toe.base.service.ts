import { Injectable, EventEmitter } from '@angular/core';
import { AppService } from '../common.service';
import { ITicTacToeService } from '../tic-tac-toe/i.tic-tac-toe.service';
import { TicTacToeGameModel, TicTacToePlayerModel } from '../../models/tic-tac-toe.model';

@Injectable()
export class TicTacToeBaseService {
    protected messageReceived: EventEmitter<string> = new EventEmitter();

    constructor(protected appSrvc: AppService, 
        protected gameModel: TicTacToeGameModel) {

        }
    
    startNewGame(gameName: string, player1name: string, player2name: string): string {
        this.gameModel.name = gameName;
        this.gameModel.addPlayers(new TicTacToePlayerModel(this.appSrvc.newGuid(), player1name, true, true));
        this.gameModel.addPlayers(new TicTacToePlayerModel(this.appSrvc.newGuid(), player2name, false, false));
        return this.gameModel.id;
    }
}