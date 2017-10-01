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
var joke_1 = require("../../models/joke");
var CreateJokeComponent = (function () {
    function CreateJokeComponent() {
        this.jokeCreate = new core_1.EventEmitter();
    }
    CreateJokeComponent.prototype.submitNewJoke = function (setup, punchline) {
        this.jokeCreate.emit(new joke_1.Joke(this.setup, this.punchline));
        this.restControls();
    };
    ;
    CreateJokeComponent.prototype.restControls = function () {
        this.setup = this.punchline = "";
    };
    return CreateJokeComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CreateJokeComponent.prototype, "jokeCreate", void 0);
CreateJokeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'create-joke',
        template: "\n        <div class=\"card card-block\" >\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"setup your joke\" [(ngModel)]=\"setup\" />\n            </div>\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"hit with punchline\" [(ngModel)]=\"punchline\" />\n            </div>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"submitNewJoke();\">Create a Joke</button>\n        </div>\n    "
    })
], CreateJokeComponent);
exports.CreateJokeComponent = CreateJokeComponent;
//# sourceMappingURL=createJoke.component.js.map