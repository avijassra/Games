import { Component } from '@angular/core';
import { ITicTacToeModel, TicTacToeModel } from '../../models/tic-tac-toe.model';
import * as _ from "lodash";

@Component({
    moduleId: module.id,
    selector: 'parent-di',
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
export class TicTacToeComponent {
    gridSize = 3;
    isGameOn = true;
    isPlayer1? = true;
    grid: ITicTacToeModel[][];

    constructor() {
        this.grid = [];
        for(let i = 0; i < this.gridSize; i++) {
            this.grid[i] = [];
            for(let j = 0; j < this.gridSize; j++) {
                this.grid[i][j] = new TicTacToeModel();
            }
        }
    }

    ticOrTac(row:number, col:number): void {
        if(this.isGameOn && this.grid[row][col].Marked === null) {
            this.grid[row][col].Marked = this.isPlayer1;
            
            if(this.checkForWinningSequence(row, col, this.isPlayer1)) {
                this.isPlayer1 = null;
                this.isGameOn = false;
            } else {
                this.isPlayer1 = !this.isPlayer1;
            }
        }
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