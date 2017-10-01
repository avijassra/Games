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
var simple_model_1 = require("../../models/simple.model");
var ParentDiComponent = (function () {
    function ParentDiComponent(service) {
        this.service = service;
    }
    return ParentDiComponent;
}());
ParentDiComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'parent-di',
        template: "\n        <div class=\"parent\" >\n            <p>Parent DI</p>\n            <form novalidation>\n                <div class=\"form-group\" >\n                    <input type=\"text\" class=\"form-control\" name=\"value\" [(ngModel)]=\"service.value\" >\n                </div>\n            </form>\n            <child-di></child-di>\n        </div>\n    ",
        styles: [
            '.parent { background-color: #D0E751; padding: 10px; } '
        ]
    }),
    __metadata("design:paramtypes", [simple_model_1.SimpleModel])
], ParentDiComponent);
exports.ParentDiComponent = ParentDiComponent;
//# sourceMappingURL=parent-di.component.js.map