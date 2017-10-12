import { Injectable } from '@angular/core'
import * as _ from 'lodash'
import { AppService } from '../services/common.service'

@Injectable()
export class TicTacToeGameModel {
    public readonly id: string;
    public name: string;
    public isGameOn: boolean;
    public players = new TicTacToePlayersModel();

    constructor(private appSrvc: AppService) {
        this.id = appSrvc.newGuid();
        this.isGameOn= false;
    }

    get activePlayer(): TicTacToePlayerModel {
        if(this.players.home.isActive) {
            return this.players.home;
        } else {
            return this.players.guest;
        }
    }

    addHomePlayer(name: string, isMarkerX: boolean): void {
        this.players.home = new TicTacToePlayerModel(this.appSrvc.newGuid(), name, true, isMarkerX);
    }

    addGuestPlayer(name: string): void {
        if(this.players.home != null) {
            this.players.guest = new TicTacToePlayerModel(this.appSrvc.newGuid(), name, !this.players.home.isActive, !this.players.home.isMarkerX);
        }
    }

    changeActivePlayer():void {
        // _.forEach(this.players, function(player){
        //     player.isActive = !player.isActive;
        // });
        this.players.home.isActive = !this.players.home.isActive;
        this.players.guest.isActive = !this.players.guest.isActive;
    }

    changePlayerMarker():void {
        // _.forEach(this.players, function(player){
        //     player.isMarkerX = !player.isMarkerX;
        // });
        this.players.home.isMarkerX = !this.players.home.isMarkerX;
        this.players.guest.isMarkerX = !this.players.guest.isMarkerX;
    }
}

export class TicTacToePlayersModel {
    public home: TicTacToePlayerModel;
    public guest: TicTacToePlayerModel
}

export class TicTacToePlayerModel {
    constructor(public id: string,
                public name: string,
                public isActive: boolean,
                public isMarkerX: boolean) {
        }
}

export class TicTacToeModel {
    public marker?: boolean;
    public isWinningSequence: boolean;

    constructor() {
        this.marker = null;
        this.isWinningSequence = false;
    }
}