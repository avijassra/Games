import { Injectable } from '@angular/core'
import * as _ from 'lodash'
import { AppService } from '../services/common.service'

@Injectable()
export class TicTacToeGameModel {
    public readonly id: string;
    public readonly players: TicTacToePlayerModel[];

    constructor(appSrvc: AppService) {
        this.id = appSrvc.newGuid();
        this.players = [];
    }

    addPlayers(playerModel: TicTacToePlayerModel): void {
        if(this.players.length < 2) {
            if(this.players.length === 1) {
                if(!(playerModel.isMarkerX !== this.players[0].isMarkerX 
                    && playerModel.isActive !== this.players[0].isActive)) {
                        throw new Error("Two player cannot have same marker or same on screen "); 
                    }
            }
            this.players.push(playerModel);
        }
    }

    changeActivePlayer():void {
        _.forEach(this.players, function(player){
            player.isActive = !player.isActive;
        });
    }
}

@Injectable()
export class TicTacToePlayerModel {
    constructor(public id: string,
                public isActive: boolean,
                public isMarkerX: boolean) {
        }
}