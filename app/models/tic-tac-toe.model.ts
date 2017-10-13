import { Injectable } from '@angular/core'
import * as _ from 'lodash'
import { AppService } from '../services/common.service'

export class TicTacToeGameModel {
    public id: string;
    public name: string;
    
    public grid: TicTacToeModel[][];
    public gameHistory: TicTacToeModel[][][];
    public totalGamesPlayed: number;
    public isGameOn: boolean;
    public noOfCellsMarkedInGame: number;

    constructor(gId?: string, gName?: string) {
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

    constructor(p1Name?: string, p2Name?: string, p1Id?: string, p2Id?: string) {
        var appSrvc: AppService;
        if(p1Id == null || p2Id == null) {
            appSrvc = new AppService();
        }

        this.player1Id = (p1Id != null ? p1Id : appSrvc.newGuid());
        this.player1Name = (p1Name != null ? p1Name : 'Player 1');
        this.player2Id = (p2Id != null ? p2Id : appSrvc.newGuid());
        this.player2Name = (p2Name != null ? p2Name : 'Player 2');
    }

    get isActivePlayerMarkerX(): boolean {
        return (this.isPlayer1Active ? this.isPlayer1MarkerX : !this.isPlayer1Active);
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