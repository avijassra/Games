import * as _ from "lodash";

import { Component, OnInit } from '@angular/core';
import { TicTacToeGameModel, TicTacToeModel } from '../../models/tic-tac-toe.model';
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
    gridSize = 3;
    ticTacToeSrvc: ITicTacToeService = null;
    gameOptions:object;
    selectedGameType: number;
    isMarkerX = true;
    gameName: string;
    player1name: string;
    player2name: string;
    noOfCellsMarkedInGame: number;
    grid: TicTacToeModel[][];
    gameHistory: TicTacToeModel[][][];

    constructor(private appSrvc: AppService, 
        private factorySrvc: TicTacToeFactoryService, 
        public gameModel: TicTacToeGameModel) {
        this.gameOptions = [
            {id: 0, desc: '-- Select --'},
            {id: 1, desc: 'Two Player'},
            {id: 2, desc: 'Remote'},
            //{id: 3, desc: 'Computer'},
        ];
        this.selectedGameType = 0;
        this.gridSize = 3;
    }

    ngOnInit(): void {
        //throw new Error("Method not implemented.");
    }

    changeTheMarker(): void {
        this.isMarkerX = !this.isMarkerX;
    }

    startTheGame(): void {
        this.ticTacToeSrvc = this.factorySrvc.resolve(GameType.TwoPlayer);
        this.player1name = this.player1name || 'Player 1';
        this.player2name = this.player2name || 'Player 2';
        this.gameName = this.gameName || `${this.player1name}_${this.appSrvc.dateUid()}`
        this.ticTacToeSrvc.startNewGame(this.gameName, this.player1name, this.isMarkerX, this.player2name);
        this.resetGrid();
    }

    resetGrid(): void {
        debugger;
        //this.winningPlayer = null;
        this.noOfCellsMarkedInGame = 0;
        this.grid = [];
        for(let i = 0; i < this.gridSize; i++) {
            this.grid[i] = [];
            for(let j = 0; j < this.gridSize; j++) {
                this.grid[i][j] = new TicTacToeModel();
            }
        }
    }

    ticOrTac(row:number, col:number): void {
        // if(this.isGameOn && this.grid[row][col].Marked === null) {
        //     this.noOfCellsMarkedInGame += 1;
        //     this.grid[row][col].Marked = this.isPlayer1;
            
        //     if(this.checkForWinningSequence(row, col, this.isPlayer1)) {
        //         this.totalGamesPlayed += 1;
        //         this.player1Score += (this.isPlayer1 ? 1 : 0);
        //         this.player2Score += (this.isPlayer1 ? 0 : 1);
        //         this.winningPlayer = `${this.isPlayer1 ? 'Player 1' : 'Player 2'} is a winner`;
        //         this.isPlayer1 = null;
        //         this.isGameOn = false;
        //     } else {
        //         if(this.noOfCellsMarkedInGame === (this.gridSize * this.gridSize)) {
        //             this.totalGamesPlayed += 1;
        //             this.winningPlayer = "Its a DRAW !!!";
        //             this.noWinner = this.totalGamesPlayed - (this.player1Score + this.player2Score);
        //             this.isPlayer1 = null;
        //         } else {
        //             this.isPlayer1 = !this.isPlayer1;
        //         }
        //     }
        // }
    }

    checkForWinningSequence(row:number, col:number, markedVal: boolean): boolean {
        // checking the row for winning sequence
        if(!_.some(this.grid, (rowItem) => rowItem[col].Marked !== markedVal )) {
            _.forEach(this.grid, (rowItem) => rowItem[col].IsWinningSequence = true );
            return true;
        }
        
        // checking the column for winning sequence
        if(!_.some(this.grid[row], (cellItem) => cellItem.Marked !== markedVal )) {
            _.forEach(this.grid[row], (cellItem) => cellItem.IsWinningSequence = true );
            return true;
        }

        // checking the diagonal winning sequence
        if((row === col || (row === ((this.gridSize - 1) - col))) || (col === ((this.gridSize - 1) - row))) {
            if(row === col && (!_.some(this.grid, (rowItem, index) => rowItem[index].Marked !== markedVal))) {
                _.forEach(this.grid, (rowItem, index) => rowItem[index].IsWinningSequence = true );
                return true;
            } else if(!_.some(this.grid, (rowItem, index) => rowItem[(this.gridSize - 1) - index].Marked !== markedVal)) {
                _.forEach(this.grid, (rowItem, index) => rowItem[(this.gridSize - 1) - index].IsWinningSequence = true );
                return true;
            }
        }
        
        return false;
    }
}