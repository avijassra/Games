import * as _ from "lodash";

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicTacToeGameModel, TicTacToePlayerModel, TicTacToeModel, TicTacToeMarkerModel } from '../../models/tic-tac-toe.model';

import { AppService } from '../../services/common.service';
import { GameType } from '../../models/enums'
import { ITicTacToeService } from '../../services/tic-tac-toe/i.tic-tac-toe.service';
import { TicTacToeFactoryService } from '../../services/tic-tac-toe/tic.-tac-toe.factory.service';

@Component({
    moduleId: module.id,
    selector: 'tic-tac-toe',
    templateUrl: 'tic-tac-toe.game.component.html',
    styles: [`  .ttt-g table tr td { font-size: 70px }
                .ttt-g table { margin: 0px auto; float: none; }
                .ttt-g table tr td { width: 100px !important; height: 100px !important; border: 3px solid #000; }
                .ttt-g table tr td:first-child { border-left: none;}
                .ttt-g table tr:first-child td { border-top: none;}
                .ttt-g table tr td:last-child { border-right: none;}
                .ttt-g table tr:last-child td { border-bottom: none;}
                `]
})
export class TicTacToeGameComponent implements OnInit {
    ticTacToeSrvc: ITicTacToeService = null;
    winningPlayer: string;
    screenId: string;
    screenBlocker: boolean;
    reqForTurn = false;
    marker: any;

    constructor(private router: Router, private factorySrvc: TicTacToeFactoryService, private gameModel: TicTacToeGameModel) {
        this.screenId = sessionStorage.getItem("screenId");
        this.marker = JSON.parse(sessionStorage.getItem("marker"));

        if(this.gameModel != null) {
            this.ticTacToeSrvc = factorySrvc.resolve(this.gameModel.gameType);
            this.ticTacToeSrvc.messageReceived.subscribe((markerModel: TicTacToeMarkerModel) => this.onMessageReceived(markerModel));
            this.ticTacToeSrvc.changeActivePlayer.subscribe(() => this.onChangeActivePlayer());
            
            this.resetGrid();
        } else {
            this.router.navigate(['tic-tac-toe']);
        }
    }

    get getActivePlayerName() {
        return (this.gameModel.players.isHomeHasTurnToPlay ? this.gameModel.players.home.name : this.gameModel.players.guest.name);
    }

    ngOnInit(): void {
        //throw new Error("Method not implemented.");
    }

    changeTheMarker(): void {
        
    }

    startTheGame(): void {
       // do nothing 
    }

    resetGrid(): void {
        this.gameModel.isGameOn = true;
        this.winningPlayer = null;
        this.gameModel.noOfCellsMarkedInGame = 0;
        this.gameModel.grid = [];
        for(let i = 0; i < this.gameModel.gridSize; i++) {
            this.gameModel.grid[i] = [];
            for(let j = 0; j < this.gameModel.gridSize; j++) {
                this.gameModel.grid[i][j] = new TicTacToeModel();
            }
        }
    }

    ticOrTac(row:number, col:number): void {
        if(this.gameModel.isGameOn && this.gameModel.grid[row][col].marker === null) {
            this.screenBlocker = true;
            var getMarker = (this.gameModel.players.isHomeHasTurnToPlay ? this.gameModel.players.isHomeMarkerX : !this.gameModel.players.isHomeMarkerX);
            this.ticTacToeSrvc.onSend(row, col, getMarker);
        }
    }

    checkForWinningSequence(row:number, col:number, markedVal: boolean): boolean {
        // checking the row for winning sequence
        if(!_.some(this.gameModel.grid, (rowItem) => rowItem[col].marker !== markedVal )) {
            _.forEach(this.gameModel.grid, (rowItem) => rowItem[col].isWinningSequence = true );
            return true;
        }
        
        // checking the column for winning sequence
        if(!_.some(this.gameModel.grid[row], (cellItem) => cellItem.marker !== markedVal )) {
            _.forEach(this.gameModel.grid[row], (cellItem) => cellItem.isWinningSequence = true );
            return true;
        }

        // checking the diagonal winning sequence
        if((row === col || (row === ((this.gameModel.gridSize - 1) - col))) || (col === ((this.gameModel.gridSize - 1) - row))) {
            if(row === col && (!_.some(this.gameModel.grid, (rowItem, index) => rowItem[index].marker !== markedVal))) {
                _.forEach(this.gameModel.grid, (rowItem, index) => rowItem[index].isWinningSequence = true );
                return true;
            } else if(!_.some(this.gameModel.grid, (rowItem, index) => rowItem[(this.gameModel.gridSize - 1) - index].marker !== markedVal)) {
                _.forEach(this.gameModel.grid, (rowItem, index) => rowItem[(this.gameModel.gridSize - 1) - index].isWinningSequence = true );
                return true;
            }
        }
        
        return false;
    }

    onMessageReceived(markerModel: TicTacToeMarkerModel) {
        this.gameModel.noOfCellsMarkedInGame += 1;
        this.gameModel.grid[markerModel.row][markerModel.col].marker = markerModel.isMarkerX;
        
        if(this.checkForWinningSequence(markerModel.row, markerModel.col, markerModel.isMarkerX)) {
            this.gameModel.totalGamesPlayed += 1;
            this.gameModel.players.home.score += (this.gameModel.players.isHomeHasTurnToPlay ? 1 : 0);
            this.gameModel.players.guest.score  += (this.gameModel.players.isHomeHasTurnToPlay ? 0 : 1);
            this.winningPlayer = `${this.gameModel.players.isHomeHasTurnToPlay ? this.gameModel.players.home.name : this.gameModel.players.guest.name} is a winner`;
            this.gameModel.isGameOn = false;
        } else {
            if(this.gameModel.noOfCellsMarkedInGame === (this.gameModel.gridSize * this.gameModel.gridSize)) {
                this.gameModel.totalGamesPlayed += 1;
                this.winningPlayer = "Its a DRAW !!!";
                // this.noWinner = this.totalGamesPlayed - (this.player1Score + this.player2Score);
                // this.isPlayer1 = null;
            } else {
                //this.screenBlocker = false;
                //this.isPlayer1 = !this.isPlayer1;
            }
        }
    }

    onChangeActivePlayer() {
        this.gameModel.players.isHomeHasTurnToPlay = !this.gameModel.players.isHomeHasTurnToPlay;
        
        if(this.gameModel.isGameOn) {
            if(this.screenId == this.gameModel.players.getPlayerWithTurn().screenId) {
                this.reqForTurn = true;
            } else {
                this.screenBlocker = false;
            }
        } else {
            this.gameModel.noOfCellsMarkedInGame = 0;
        }
    }

    onSwapMarkers() {

    }

    reqForTurnAxn(): void {
        this.screenBlocker = false;
    }
}