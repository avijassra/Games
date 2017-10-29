import * as _ from "lodash";

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicTacToeGameModel, TicTacToePlayerModel } from '../../models/tic-tac-toe.model';

import { AppService } from '../../services/common.service';
import { GameType } from '../../models/enums'
import { ITicTacToeService } from '../../services/tic-tac-toe/i.tic-tac-toe.service';
import { TicTacToeFactoryService } from '../../services/tic-tac-toe/tic.-tac-toe.factory.service';


import { TicTacToeRemoteService } from '../../services/tic-tac-toe/tic-tac-toe.remote.service';


@Component({
    moduleId: module.id,
    selector: 'tic-tac-toe',
    templateUrl: 'tic-tac-toe.component.html',
})
export class TicTacToeComponent implements OnInit {
    screenId: string;
    ticTacToeSrvc: ITicTacToeService = null;
    gameOptions:object;
    selectedGameType: number;
    gName: string;
    p1Name: string;
    p2Name: string;
    winningPlayer: string;
    playerModel: TicTacToePlayerModel = null;
    reqInProgress: boolean;
    marker: any = {
        x: 'fa-check-circle',
        o: 'fa-times-circle-o'
    };

    isMarkerX = true;
    reqToStartGame = false;
    gridSize = 3;


    msgs: string[];
    chatMsg: string;
    chatBox: TicTacToeRemoteService;

    constructor(private router: Router, private factorySrvc: TicTacToeFactoryService, private gameModel: TicTacToeGameModel) {
        this.screenId = AppService.newGuid();
        sessionStorage.setItem("screenId", this.screenId);
        this.gameModel.id = AppService.newGuid();
        this.selectedGameType = 0;
        this.gridSize = 3;

        this.gameOptions = [
            {id: 0, desc: '-- Select --'},
            {id: 1, desc: 'Two Player'},
            {id: 2, desc: 'Remote'},
            //{id: 3, desc: 'Computer'},
        ];

        this.chatBox = new TicTacToeRemoteService();
        this.chatBox.chatMessageGet.subscribe((msg: string)=> this.getMsg(msg))
        this.msgs = [];
    }

    ngOnInit(): void {
        //throw new Error("Method not implemented.");
    }

    changeTheMarker(): void {
        this.isMarkerX = !this.isMarkerX;
    }

    startTheGame(): void {
        this.reqToStartGame = true;
        this.ticTacToeSrvc = this.factorySrvc.resolve(this.selectedGameType);
        this.ticTacToeSrvc.gameStarted.subscribe((player: TicTacToePlayerModel) => this.onGameStarted(player));
        this.gameModel.gridSize = this.gridSize;
        this.gameModel.gameType = this.selectedGameType;
        this.gameModel.name = this.gName || (`${this.p1Name}-`);
        this.reqInProgress = true;
        this.gameModel.players.addHomePlayer(this.screenId, this.p1Name, (this.isMarkerX ? this.marker.x : this.marker.o));
        this.ticTacToeSrvc.startNewGame(this.gameModel, (this.isMarkerX ? this.marker.o : this.marker.x));
    }

    onGameStarted(player: TicTacToePlayerModel) {
        var pId = null, sId, name;
        if(this.gameModel.gameType == GameType.TwoPlayer) {
            sId = this.screenId;
            name = this.p2Name;
        } else {
            pId = player.id
            sId = player.screenId;
            name = player.name
        }

        this.gameModel.players.addGuestPlayer(sId, name, (this.isMarkerX ? this.marker.o : this.marker.x), pId);
        this.router.navigate(['/tic-tac-toe', this.gameModel.id]);
    }

    getHomePlayerMarker() {
        return (this.isMarkerX ? this.marker.x : this.marker.o );
    }

    getGuestPlayerMarker() {
        return (this.isMarkerX ? this.marker.o : this.marker.x );
    }

    sendMsg(): void {
        this.chatBox.onChatMessageSend(this.chatMsg);
        this.chatMsg = "";
    }

    getMsg(msg: string): void {
        this.msgs.push(msg);
    }
}