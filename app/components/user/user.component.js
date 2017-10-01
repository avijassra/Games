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
var user_model_1 = require("../../models/user.model");
var user_service_1 = require("../../services/user.service");
var UserComponent = (function () {
    function UserComponent(userSrvc) {
        this.userSrvc = userSrvc;
        this.model = new user_model_1.UserModel();
    }
    UserComponent.prototype.ngOnInit = function () {
        this.langs = [
            'English',
            'French',
            'German'
        ];
    };
    UserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userSrvc.Post(this.model)
            .then(function (resp) {
            debugger;
            _this.model.id = resp.id;
        });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user-info',
        template: "\n        <div>\n            <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit();\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"id\" [(ngModel)]=\"model.id\" readonly=\"readonly\" >\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"firstname\" required [(ngModel)]=\"model.firstname\" >\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"lastname\" required [(ngModel)]=\"model.lastname\" >\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"email\" class=\"form-control\" name=\"email\" required [(ngModel)]=\"model.email\" >\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"number\" class=\"form-control\" name=\"age\" required [(ngModel)]=\"model.age\" >\n                </div>\n                <div class=\"form-group\">\n                    <select class=\"form-control\" name=\"language\" [(ngModel)]=\"model.language\" >\n                        <option value=\"\">Please select a language</option>\n                        <option *ngFor=\"let lang of langs\" [value]=\"lang\">{{lang}}</option>\n                    </select>\n                </div>\n                    <pre>{{ model | json }}</pre>\n                <div class=\"form-group\">\n                    <button type=\"submit\" class=\"btn btn-primary\" >Submit</button> \n                </div>\n            </form>\n        </div>\n    ",
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map