import { Injectable } from '@angular/core'
import * as _ from 'lodash'
import { AppService } from '../services/common.service'
import { GameType } from '../models/enums'

export class TicTacToeGameModel {
    public id: string;
    public name: string;
    
    public grid: TicTacToeModel[][];
    public gameHistory: TicTacToeModel[][][];
    public totalGamesPlayed: number;
    public isGameOn: boolean;
    public noOfCellsMarkedInGame: number;

    constructor(public gridSize:number, public gameType :GameType, gId?: string, gName?: string) {
        this.id = (gId != null ? gId : (new AppService()).newGuid());
        this.name = (gName != null? gName : this.id);
    }
}

export class TicTacToePlayerModel {
    public player1Id: string;
    public player1Name: string;
    public isPlayer1Active: boolean;
    public isPlayer1MarkerX: boolean;
    public player1Score = 0;

    public player2Id: string;
    public player2Name: string;
    public player2Score = 0;

    constructor(p1Name?: string, isP1MarkerX?: boolean, p2Name?: string, p1Id?: string, p2Id?: string) {
        var appSrvc: AppService;
        if(p1Id == null || p2Id == null) {
            appSrvc = new AppService();
        }

        this.player1Id = (p1Id != null ? p1Id : appSrvc.newGuid());
        this.player1Name = (p1Name != null ? p1Name : 'Player 1');
        this.isPlayer1MarkerX = isP1MarkerX || true;
        this.isPlayer1Active = true;
        this.player2Id = (p2Id != null ? p2Id : appSrvc.newGuid());
        this.player2Name = (p2Name != null ? p2Name : 'Player 2');
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