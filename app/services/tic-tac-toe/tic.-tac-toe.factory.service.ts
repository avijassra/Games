import { Injectable, EventEmitter } from '@angular/core'
import { GameType } from '../../models/enums'
import { TicTacToeGameModel } from '../../models/tic-tac-toe.model'
import { ITicTacToeService } from '../tic-tac-toe/i.tic-tac-toe.service'
import { TicTacToeTwoPlayerService } from '../tic-tac-toe/tic-tac-toe.two-player.service'
import { TicTacToeRemoteService } from '../tic-tac-toe/tic-tac-toe.remote.service'
import { PubSubService } from '../pubsub.service'

@Injectable()
export class TicTacToeFactoryService {
    constructor(private pubSubSrvc: PubSubService) {
    }

    resolve(type: GameType): ITicTacToeService {
        var srvc: ITicTacToeService = null;    

        if(GameType.TwoPlayer === type){
            srvc = (new TicTacToeTwoPlayerService())
        } else if(GameType.Remote === type) {
            srvc = (new TicTacToeRemoteService(this.pubSubSrvc));
        } else if(GameType.Computer == type) {
            return null;
        }
        
        return srvc;
    }
}