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
var ParentDiContainerComponent = (function () {
    function ParentDiContainerComponent(service) {
        this.service = service;
    }
    return ParentDiContainerComponent;
}());
ParentDiContainerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'parent-di-container',
        template: "\n        <div class=\"row\" >\n            <div class=\"col-lg-6\" >\n                <parent-di></parent-di>\n            </div>\n            <div class=\"col-lg-6\" >\n                <parent-di></parent-di>\n            </div>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [simple_model_1.SimpleModel])
], ParentDiContainerComponent);
exports.ParentDiContainerComponent = ParentDiContainerComponent;
//# sourceMappingURL=parent-container.component.js.map