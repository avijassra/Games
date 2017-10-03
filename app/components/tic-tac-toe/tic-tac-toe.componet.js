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
var TicTacToeComponent = /** @class */ (function () {
    function TicTacToeComponent() {
        this.isPlayer1 = true;
        this.grid = [];
        for (var i = 0; i < 3; i++) {
            this.grid[i] = [];
        }
    }
    TicTacToeComponent.prototype.ticOrTac = function (row, col) {
        this.grid[row][col] = (this.isPlayer1 ? 1 : 0);
        this.isPlayer1 = !this.isPlayer1;
    };
    TicTacToeComponent.prototype.getCssClass = function (row, col) {
        return ((this.isPlayer1 && (this.grid[row][col] === 1 || this.grid[row][col] === 0)) ? "fa-times" : "fa-circle-o");
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