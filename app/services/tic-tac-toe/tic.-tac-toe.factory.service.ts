import { Injectable, EventEmitter } from '@angular/core'
import { GameType } from '../../models/enums'
import { AppService } from '../common.service';
import { TicTacToeGameModel } from '../../models/tic-tac-toe.model';
import { ITicTacToeService } from '../tic-tac-toe/i.tic-tac-toe.service'
import { TicTacToeTwoPlayerService } from '../tic-tac-toe/tic-tac-toe.two-player.service'
import { TicTacToeRemoteService } from '../tic-tac-toe/tic-tac-toe.remote.service'

@Injectable()
export class TicTacToeFactoryService {
    constructor(private appSrvc: AppService) {
    }

    resolve(type: GameType): ITicTacToeService {
        var srvc: ITicTacToeService = null;    

        if(GameType.TwoPlayer === type){
            srvc = (new TicTacToeTwoPlayerService(this.appSrvc))
        } else if(GameType.Remote === type) {
            srvc = (new TicTacToeRemoteService(this.appSrvc));
        } else if(GameType.Computer == type) {
            return null;
        }
        
        return srvc;
    }
}