import * as _ from "lodash";

import { Component, OnInit } from '@angular/core';
import { TicTacToeGameModel, TicTacToePlayerModel, TicTacToeModel } from '../../models/tic-tac-toe.model';
import { AppService } from '../../services/common.service';
import { GameType } from '../../models/enums'
import { ITicTacToeService } from '../../services/tic-tac-toe/i.tic-tac-toe.service';
import { TicTacToeFactoryService } from '../../services/tic-tac-toe/tic.-tac-toe.factory.service';

@Component({
    moduleId: module.id,
    selector: 'tic-tac-toe',
    templateUrl: 'tic-tac-toe.component.html',
    styles: [`  .ttt-g table tr td { font-size: 70px }
                .ttt-g table { margin: 0px auto; float: none; }
                .ttt-g table tr td { width: 100px !important; height: 100px !important; border: 3px solid #000; }
                .ttt-g table tr td:first-child { border-left: none;}
                .ttt-g table tr:first-child td { border-top: none;}
                .ttt-g table tr td:last-child { border-right: none;}
                .ttt-g table tr:last-child td { border-bottom: none;}
                `]
})
export class TicTacToeComponent implements OnInit {
    subscription: any;

    screenId: string;
    ticTacToeSrvc: ITicTacToeService = null;
    gridSize = 3;
    gameOptions:object;
    selectedGameType: number;
    p1Name: string;
    p2Name: string;
    isMarkerX: boolean;
    winningPlayer: string;

    gameModel: TicTacToeGameModel = null;
    playerModel: TicTacToePlayerModel = null;

    constructor(private factorySrvc: TicTacToeFactoryService) {
        
        this.selectedGameType = 0;
        this.gridSize = 3;

        //this.gameModel = new TicTacToeGameModel();
        //this.playerModel = new TicTacToePlayerModel();

        this.gameOptions = [
            {id: 0, desc: '-- Select --'},
            {id: 1, desc: 'Two Player'},
            {id: 2, desc: 'Remote'},
            //{id: 3, desc: 'Computer'},
        ];
    }

    ngOnInit(): void {
        //throw new Error("Method not implemented.");
    }

    changeTheMarker(): void {
        this.isMarkerX = !this.isMarkerX;
    }

    startTheGame(): void {
        debugger;
        this.ticTacToeSrvc = this.factorySrvc.resolve(GameType.TwoPlayer);
        this.subscription = this.ticTacToeSrvc.changeActivePlayer.subscribe(() => this.changeActivePlayer());
        this.gameModel = new TicTacToeGameModel();
        this.playerModel = new TicTacToePlayerModel(this.p1Name, this.p2Name);
        this.ticTacToeSrvc.startNewGame(this.gameModel, this.playerModel);
        this.resetGrid();

        }

    resetGrid(): void {
        //this.winningPlayer = null;
        this.gameModel.noOfCellsMarkedInGame = 0;
        this.gameModel.grid = [];
        for(let i = 0; i < this.gridSize; i++) {
            this.gameModel.grid[i] = [];
            for(let j = 0; j < this.gridSize; j++) {
                this.gameModel.grid[i][j] = new TicTacToeModel();
            }
        }
    }

    ticOrTac(row:number, col:number): void {
        if(this.gameModel.isGameOn && this.gameModel.grid[row][col].marker === null) {
            this.gameModel.noOfCellsMarkedInGame += 1;
            this.gameModel.grid[row][col].marker = this.playerModel.isActivePlayerMarkerX;
            
            if(this.checkForWinningSequence(row, col, this.playerModel.isActivePlayerMarkerX)) {
                this.gameModel.totalGamesPlayed += 1;
                this.playerModel.player1Score += (this.playerModel.isPlayer1Active ? 1 : 0);
                this.playerModel.player2Score  += (this.playerModel.isPlayer1Active ? 0 : 1);
                this.winningPlayer = `${this.playerModel.isPlayer1Active ? this.playerModel.player1Name : this.playerModel.player2Name} is a winner`;
                //this.isPlayer1 = null;
                this.gameModel.isGameOn = false;
            } else {
                if(this.gameModel.noOfCellsMarkedInGame === (this.gridSize * this.gridSize)) {
                    this.gameModel.totalGamesPlayed += 1;
                    // this.winningPlayer = "Its a DRAW !!!";
                    // this.noWinner = this.totalGamesPlayed - (this.player1Score + this.player2Score);
                    // this.isPlayer1 = null;
                } else {
                    //this.isPlayer1 = !this.isPlayer1;
                }
            }
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
        if((row === col || (row === ((this.gridSize - 1) - col))) || (col === ((this.gridSize - 1) - row))) {
            if(row === col && (!_.some(this.gameModel.grid, (rowItem, index) => rowItem[index].marker !== markedVal))) {
                _.forEach(this.gameModel.grid, (rowItem, index) => rowItem[index].isWinningSequence = true );
                return true;
            } else if(!_.some(this.gameModel.grid, (rowItem, index) => rowItem[(this.gridSize - 1) - index].marker !== markedVal)) {
                _.forEach(this.gameModel.grid, (rowItem, index) => rowItem[(this.gridSize - 1) - index].isWinningSequence = true );
                return true;
            }
        }
        
        return false;
    }

    changeActivePlayer() {
        alert('hello');
    }
}