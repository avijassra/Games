"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TicTacToeComponent = /** @class */ (function () {
    function TicTacToeComponent() {
    }
    TicTacToeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'parent-di',
            templateUrl: 'tic-tac-toe.component.html',
            styles: ["  \n                .ttt-g table { margin: 0px auto; float: none; }\n                .ttt-g table tr td { width: 150px !important; height: 150px !important; border: 2px solid #000; }\n                .ttt-g table tr td:first-child { border-left: none;}\n                .ttt-g table tr:first-child td { border-top: none;}\n                .ttt-g table tr td:last-child { border-right: none;}\n                .ttt-g table tr:last-child td { border-bottom: none;}"]
        })
    ], TicTacToeComponent);
    return TicTacToeComponent;
}());
exports.TicTacToeComponent = TicTacToeComponent;
//# sourceMappingURL=tic-tac-toe.componet.js.map