import { Injectable } from '@angular/core'
import * as _ from 'lodash'
import { AppService } from '../services/common.service'
import { GameType } from '../models/enums'

@Injectable()
export class TicTacToeGameModel {
    public grid: TicTacToeModel[][];
    public gameHistory: TicTacToeModel[][][];
    public totalGamesPlayed: number;
    public isGameOn: boolean;
    public noOfCellsMarkedInGame: number;

    public players: TicTacToeGamePlayersModel;
    public gridSize:number; 
    public gameType :GameType; 
    public id: string; 
    public name: string;

    //constructor(public gridSize:number, public gameType :GameType, public id?: string, public name?: string) {
    constructor() {
        //this.id = (this.id || (new AppService()).newGuid());
        //this.name = (this.name || this.id);
        this.players = new TicTacToeGamePlayersModel();
    }
}

export class TicTacToeGamePlayersModel {
    public isHomeHasTurnToPlay: boolean;
    public isHomeMarkerX: boolean;
    public home: TicTacToePlayerModel;
    public guest: TicTacToePlayerModel;

    addHomePlayer(screenId:string, name: string, isMarkerX: boolean, id?: string) {
        this.home = new TicTacToePlayerModel(screenId, (name || 'Player 1'), id);
        this.isHomeHasTurnToPlay = true;
        this.isHomeMarkerX = isMarkerX;
    }

    addGuestPlayer(screenId:string, name: string, id?: string) {
        this.guest = new TicTacToePlayerModel(screenId, (name || 'Player 2'), id);
    }

    getPlayerWithTurn() : TicTacToePlayerModel {
        return (this.isHomeHasTurnToPlay ? this.home : this.guest);
    }
}

export class TicTacToePlayerModel {
    public score: number;

    constructor(public screenId: string, public name: string, public id?: string) {
        if(id == null) {
            this.id = AppService.newGuid();
        }
        this.score = 0;
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

export class TicTacToeMarkerModel {
    constructor(public row: number, public col: number, public isMarkerX: boolean){};
}