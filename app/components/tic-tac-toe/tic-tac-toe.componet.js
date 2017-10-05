"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tic_tac_toe_model_1 = require("../../models/tic-tac-toe.model");
var _ = require("lodash");
var TicTacToeComponent = /** @class */ (function () {
    function TicTacToeComponent() {
        this.gridSize = 3;
        this.isGameOn = true;
        this.isPlayer1 = true;
        this.grid = [];
        for (var i = 0; i < this.gridSize; i++) {
            this.grid[i] = [];
            for (var j = 0; j < this.gridSize; j++) {
                this.grid[i][j] = new tic_tac_toe_model_1.TicTacToeModel();
            }
        }
    }
    TicTacToeComponent.prototype.ticOrTac = function (row, col) {
        debugger;
        if (this.isGameOn && this.grid[row][col].Marked === null) {
            this.grid[row][col].Marked = this.isPlayer1;
            if (this.checkForWinningSequence(row, col, this.isPlayer1)) {
                this.isPlayer1 = null;
                this.isGameOn = false;
            }
            else {
                this.isPlayer1 = !this.isPlayer1;
            }
        }
    };
    TicTacToeComponent.prototype.checkForWinningSequence = function (row, col, markedVal) {
        var _this = this;
        // checking the row for winning sequence
        if (!_.some(this.grid, function (rowItem) { return rowItem[col].Marked !== markedVal; })) {
            _.forEach(this.grid, function (rowItem) { return rowItem[col].IsWinningSequence = true; });
            return true;
        }
        // checking the column for winning sequence
        if (!_.some(this.grid[row], function (cellItem) { return cellItem.Marked !== markedVal; })) {
            _.forEach(this.grid[row], function (cellItem) { return cellItem.IsWinningSequence = true; });
            return true;
        }
        // checking the diagonal winning sequence
        if ((row === 0 || row === this.gridSize - 1) && (col === 0 || col === this.gridSize)) {
            if (row === col && (!_.some(this.grid, function (rowItem, index) { return _this.grid[index][index].Marked !== markedVal; }))) {
                _.forEach(this.grid, function (rowItem, index) { return rowItem[index][index].IsWinningSequence = true; });
                return true;
            }
            else if (!_.some(this.grid, function (rowItem, index) { return _this.grid[index][(_this.gridSize - 1) - index].Marked !== markedVal; })) {
                _.forEach(this.grid, function (rowItem, index) { return rowItem[index][(_this.gridSize - 1) - index].IsWinningSequence = true; });
                return true;
            }
        }
        return false;
    };
    TicTacToeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'parent-di',
            templateUrl: 'tic-tac-toe.component.html',
            styles: ["  .ttt-g table tr td { font-size: 70px }\n                .ttt-g table { margin: 0px auto; float: none; }\n                .ttt-g table tr td { width: 100px !important; height: 100px !important; border: 3px solid #000; }\n                .ttt-g table tr td:first-child { border-left: none;}\n                .ttt-g table tr:first-child td { border-top: none;}\n                .ttt-g table tr td:last-child { border-right: none;}\n                .ttt-g table tr:last-child td { border-bottom: none;}\n                "]
        }),
        __metadata("design:paramtypes", [])
    ], TicTacToeComponent);
    return TicTacToeComponent;
}());
exports.TicTacToeComponent = TicTacToeComponent;
//# sourceMappingURL=tic-tac-toe.componet.js.map