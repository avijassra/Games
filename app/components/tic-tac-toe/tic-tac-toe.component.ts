import * as _ from "lodash";

import { Component, OnInit } from '@angular/core';
import { TicTacToeGameModel, TicTacToePlayerModel } from '../../models/tic-tac-toe.model';
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
        this.ticTacToeSrvc.startNewGame(this.gameName, this.player1name, this.player2name);
    }
}