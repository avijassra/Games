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
var joke_component_1 = require("../joke/joke.component");
var JokeListComponent = (function () {
    function JokeListComponent() {
        this.jokes = [
            new joke_1.Joke("Why Does orange stopped rolling down the hill", "It ran out of juice"),
            new joke_1.Joke("Why did the skeleton not go to the party?", "He had no-body to go with.")
        ];
    }
    JokeListComponent.prototype.ngAfterViewInit = function () {
        var jokes = this.jokeViewChildren.toArray();
    };
    JokeListComponent.prototype.addJokeToDisplay = function (joke) {
        this.jokes.unshift(joke);
    };
    return JokeListComponent;
}());
__decorate([
    core_1.ViewChildren(joke_component_1.JokeComponent),
    __metadata("design:type", core_1.QueryList)
], JokeListComponent.prototype, "jokeViewChildren", void 0);
JokeListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'joke-list',
        template: "\n        <create-joke (jokeCreate)=\"addJokeToDisplay($event)\"></create-joke>\n        <hr />\n        <joke *ngFor=\"let j of jokes\" [joke]=\"j\" >\n            <h1 class=\"setup\">{{j.setup}}</h1>\n            <p class=\"punchline\">{{j.punchline}}</p>\n        </joke>\n        <h4>Content Jokes</h4>\n        <ng-content></ng-content>\n    "
    })
], JokeListComponent);
exports.JokeListComponent = JokeListComponent;
//# sourceMappingURL=jokes.component.js.map