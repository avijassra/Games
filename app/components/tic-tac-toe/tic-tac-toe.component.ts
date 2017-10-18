import * as _ from "lodash";

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicTacToeGameModel, TicTacToePlayerModel } from '../../models/tic-tac-toe.model';
import { AppService } from '../../services/common.service';
import { GameType } from '../../models/enums'
import { ITicTacToeService } from '../../services/tic-tac-toe/i.tic-tac-toe.service';
import { TicTacToeFactoryService } from '../../services/tic-tac-toe/tic.-tac-toe.factory.service';

@Component({
    moduleId: module.id,
    selector: 'tic-tac-toe',
    templateUrl: 'tic-tac-toe.component.html',
})
export class TicTacToeComponent implements OnInit {
    screenId: string;
    ticTacToeSrvc: ITicTacToeService = null;

    gridSize = 3;
    gameOptions:object;
    selectedGameType: number;
    p1Name: string;
    p2Name: string;
    isMarkerX = true;
    winningPlayer: string;

    gameModel: TicTacToeGameModel = null;
    playerModel: TicTacToePlayerModel = null;

    constructor(private router: Router, appSrvc: AppService, private factorySrvc: TicTacToeFactoryService) {
        this.screenId = appSrvc.newGuid();
        this.selectedGameType = 0;
        this.gridSize = 3;

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
        this.ticTacToeSrvc.gameStarted.subscribe(() => this.onGameStarted());

        this.gameModel = new TicTacToeGameModel(this.gridSize, this.selectedGameType);
        this.gameModel.addHomePlayer(this.screenId, this.p1Name, this.isMarkerX);
        this.gameModel.addGuestPlayer(this.screenId, this.p2Name);
    }

    onGameStarted() {
        sessionStorage.setItem("gameModel", JSON.stringify(this.gameModel));
        //sessionStorage.setItem("playerModel", JSON.stringify(this.playerModel));
        this.router.navigate(['/tic-tac-toe', this.gameModel.id]);
    }
}

//https://www.quora.com/What-is-the-sluttiest-thing-youve-done-that-was-out-of-character-for-you