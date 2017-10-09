import { Injectable } from '@angular/core'
import { GameType } from '../../models/enums'
import { AppService } from '../common.service';
import { TicTacToeGameModel, TicTacToePlayerModel } from '../../models/tic-tac-toe.model';
import { ITicTacToeService } from '../tic-tac-toe/i.tic-tac-toe.service'
import { TicTacToeTwoPlayerService } from '../tic-tac-toe/tic-tac-toe.two-player.service'
import { TicTacToeRemoteService } from '../tic-tac-toe/tic-tac-toe.remote.service'

@Injectable()
export class TicTacToeFactoryService {
    constructor(private appSrvc: AppService, 
        private gameModel: TicTacToeGameModel) {}

    resolve(type: GameType): ITicTacToeService {
        if(GameType.TwoPlayer === type){
            return (new TicTacToeTwoPlayerService(this.appSrvc, this.gameModel))
        } else if(GameType.Remote === type) {
            return (new TicTacToeRemoteService());
        } else if(GameType.Computer == type) {
            return null;
        }
        
        return null;
    }
}