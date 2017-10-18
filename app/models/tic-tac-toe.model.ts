import { Injectable } from '@angular/core'
import * as _ from 'lodash'
import { AppService } from '../services/common.service'
import { GameType } from '../models/enums'

export class TicTacToeGameModel {
    public grid: TicTacToeModel[][];
    public gameHistory: TicTacToeModel[][][];
    public totalGamesPlayed: number;
    public isGameOn: boolean;
    public noOfCellsMarkedInGame: number;

    public home: TicTacToePlayerModel;
    public guest: TicTacToePlayerModel;

    constructor(public gridSize:number, public gameType :GameType, public id?: string, public name?: string) {
        this.id = (this.id || (new AppService()).newGuid());
        this.name = (this.name || this.id);
    }

    addHomePlayer(screenId:string, name: string, isMarkerX: boolean) {
        this.home = new TicTacToePlayerModel(screenId, name);
        this.home.hasTurnToPlay = true;
        this.home.isMarkerX = isMarkerX;

        if(this.guest != null) {
            this.guest.isMarkerX = !this.home.isMarkerX;
        }
    }

    addGuestPlayer(screenId:string, name: string) {
        this.guest = new TicTacToePlayerModel(screenId, name);
    }
}

// export class TicTacToePlayer1Model {
//     public player1Id: string;
//     public player1ScreenId: string;
//     public player1Name: string;
//     public isPlayer1Active: boolean;
//     public isPlayer1MarkerX: boolean;
//     public player1Score = 0;

//     public player2Id: string;
//     public player2ScreenId: string;
//     public player2Name: string;
//     public player2Score = 0;

//     constructor(p1Name?: string, isP1MarkerX?: boolean, p2Name?: string, p1Id?: string, p2Id?: string) {
//         var appSrvc: AppService;
//         if(p1Id == null || p2Id == null) {
//             appSrvc = new AppService();
//         }

//         this.player1Id = (p1Id != null ? p1Id : appSrvc.newGuid());
//         this.player1Name = (p1Name != null ? p1Name : 'Player 1');
//         this.isPlayer1MarkerX = isP1MarkerX || true;
//         this.isPlayer1Active = true;
//         this.player2Id = (p2Id != null ? p2Id : appSrvc.newGuid());
//         this.player2Name = (p2Name != null ? p2Name : 'Player 2');
//     }
// }

export class TicTacToePlayerModel {
    public hasTurnToPlay: boolean;
    public isMarkerX: boolean;
    public score: number;

    constructor(public screenId: string, public name: string, public id?: string) {
        if(id == null) {
            this.id = (new AppService()).newGuid();
        }
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