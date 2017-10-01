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
var JokeComponent = (function () {
    function JokeComponent() {
    }
    return JokeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], JokeComponent.prototype, "joke", void 0);
JokeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'joke',
        template: "\n        <div>\n            <div class=\"card card-block\" cardHover>\n                <div class=\"card-title\">\n                    <ng-content select=\".setup\"></ng-content>\n                </div>\n                <div class=\"card-text\" [hidden]=\"joke.hide\">\n                    <ng-content select=\".punchline\"></ng-content>\n                </div>\n                <div>\n                    <button class=\"btn btn-warning\" (click)=\"joke.togglePunchline()\">Toggle</button>\n                </div>\n            </div>\n            <div class=\"row\" style=\"min-height:5px\" ></div>\n        </div>\n    "
    })
], JokeComponent);
exports.JokeComponent = JokeComponent;
//# sourceMappingURL=joke.component.js.map