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
            template: "\n        <div class=\"parent\" >\n            <p>Parent DI</p>\n            <form novalidation>\n                <div class=\"form-group\" >\n                    Hello World    \n                </div>\n            </form>\n        </div>\n    ",
            styles: [
                '.parent { background-color: #D0E751; padding: 10px; } '
            ]
        })
    ], TicTacToeComponent);
    return TicTacToeComponent;
}());
exports.TicTacToeComponent = TicTacToeComponent;
//# sourceMappingURL=tic-tac-toe.componet.js.map