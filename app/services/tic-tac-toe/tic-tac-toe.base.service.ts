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
    
    startNewGame(gameName: string, player1name: string, isMarkerX: boolean, player2name: string): string {
        this.gameModel.name = gameName;
        this.gameModel.isGameOn = true;
        this.gameModel.addHomePlayer(player1name, isMarkerX);
        this.gameModel.addGuestPlayer(player2name);
        return this.gameModel.id;
    }
}