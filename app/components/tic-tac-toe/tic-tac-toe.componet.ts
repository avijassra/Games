import { Component } from '@angular/core';
import { ITicTacToeModel, TicTacToeModel } from '../../models/tic-tac-toe.model';


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
    isGameOn: true;
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
        if(this.isGameOn) {
            this.grid[row][col].Marked = (this.isPlayer1 ? 1 : 0)
            
            if(this.checkForWinningSequence()) {
                this.isPlayer1 = null;
            } else {
                this.isPlayer1 = !this.isPlayer1;
            }
        }
    }

    checkForWinningSequence(): boolean {
        

        return false;
    }
}