import { Component } from '@angular/core';

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
    isPlayer1 = true;
    grid: number[][];

    constructor() {
        this.grid = [];
        for(let i = 0; i < 3; i++) {
            this.grid[i] = [];
        }
    }

    ticOrTac(row:number, col:number): void {
        this.grid[row][col] = (this.isPlayer1 ? 1 : 0)
        this.isPlayer1 = !this.isPlayer1;
    }

    getCssClass(row:number, col: number): string {
        return ((this.isPlayer1 && (this.grid[row][col] === 1 || this.grid[row][col] === 0)) ? "fa-times" : "fa-circle-o");
    }
}