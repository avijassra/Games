import * as _ from "lodash";

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicTacToeGameModel, TicTacToePlayerModel } from '../../models/tic-tac-toe.model';

import { AppService } from '../../services/common.service';
import { GameType } from '../../models/enums'
import { ITicTacToeService } from '../../services/tic-tac-toe/i.tic-tac-toe.service';
import { TicTacToeFactoryService } from '../../services/tic-tac-toe/tic.-tac-toe.factory.service';
import { PubSubService } from '../../services/pubsub.service';

@Component({
    //moduleId: module.id,
    selector: 'tic-tac-toe',
    templateUrl: 'tic-tac-toe.component.html',
})
export class TicTacToeComponent implements OnInit {
    screenId: string;
    dateId: string;
    ticTacToeSrvc: ITicTacToeService;
    gameOptions:object;
    selectedGameType: number;
    winningPlayer: string;
    playerModel: TicTacToePlayerModel;
    reqInProgress: boolean;
    marker: any = {
        x: 'fa-check-circle',
        o: 'fa-times-circle-o'
    };
    isMarkerX = true;
    reqToStartGame = false;
    gridSize = 3;

    gNameVal: string;
    gNameUiVal: string;
    p1NameVal: string;
    p1NameUiVal: string;
    p2NameVal: string;
    p2NameUiVal: string;

    msgs: string[];
    chatMsg: string;
    
    constructor(private router: Router, private factorySrvc: TicTacToeFactoryService, private gameModel: TicTacToeGameModel, private pubSubSrvc: PubSubService) {
        this.screenId = AppService.newGuid();
        this.dateId = AppService.dateUid();
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

        this.pubSubSrvc.incomingMessage.subscribe((msg: string)=> this.getMsg(msg))
        this.pubSubSrvc.gameWaitingForPlayers.subscribe((game: string) => this.onDisplayWaitingPlayers(game));
        this.msgs = [];
    }

    ngOnInit(): void {
        //throw new Error("Method not implemented.");
    }

    get gName() {
        return (this.gNameVal || `${this.dateId}-${this.p1Name}`);
    }

    set gName(val: string) {
        this.gNameVal = val;
    }

    get gNameUi() {
        return this.gNameUiVal;
    }

    set gNameUi(val: string) {
        this.gNameUiVal = this.gNameVal = val;
    }

    get p1Name() {
        return (this.p1NameVal || 'Home Player');
    }

    set p1Name(val: string) {
        this.p1NameVal = val;
    }

    get p1NameUi() {
        return this.p1NameUiVal;
    }

    set p1NameUi(val: string) {
        this.p1NameUiVal = this.p1NameVal  = val;
    }

    get p2Name() {
        return (this.p2NameVal || 'Guest Player');
    }

    set p2Name(val: string) {
        this.p2NameVal = val;
    }

    get p2NameUi() {
        return this.p2NameUiVal
    }

    set p2NameUi(val: string) {
        this.p2NameUiVal = this.p2NameVal = val;
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
        this.gameModel.name = this.gNameVal;
        this.reqInProgress = true;
        this.gameModel.players.addHomePlayer(this.screenId, this.p1Name, (this.isMarkerX ? this.marker.x : this.marker.o));
        this.ticTacToeSrvc.startNewGame(this.gameModel, (this.isMarkerX ? this.marker.o : this.marker.x));
    }

    onGameStarted(player: TicTacToePlayerModel) {
        var pId, sId, name;
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

    onDisplayWaitingPlayers(game: string): void {
        alert(game)
    }

    sendMsg(): void {
        this.pubSubSrvc.onOutgoingMessage(this.chatMsg);
        this.chatMsg = "";
    }

    getMsg(msg: string): void {
        this.msgs.push(msg);
    }
}