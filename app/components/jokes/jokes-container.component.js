"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var joke_1 = require("../../models/joke");
var JokeContainerComponent = (function () {
    function JokeContainerComponent() {
        this.joke = new joke_1.Joke("What did the Ranch told the frige?", "Close the door, I am dressing here");
    }
    return JokeContainerComponent;
}());
JokeContainerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'joke-container',
        template: "\n        <div class=\"container\">\n            <joke-list>\n                <joke [joke]=\"joke\">\n                    <h1 class=\"setup\">{{joke.setup}}</h1>\n                    <p class=\"punchline\">{{joke.punchline}}</p>\n                </joke>\n            </joke-list>\n        </div>\n    ",
    })
], JokeContainerComponent);
exports.JokeContainerComponent = JokeContainerComponent;
//# sourceMappingURL=jokes-container.component.js.map