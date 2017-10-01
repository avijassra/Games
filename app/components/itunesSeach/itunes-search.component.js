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
var search_service_1 = require("../../services/search.service");
var ItunesSearchComponent = (function () {
    function ItunesSearchComponent(searchSrvc) {
        this.searchSrvc = searchSrvc;
    }
    ItunesSearchComponent.prototype.doSearch = function (term) {
        this.searchSrvc.search(term);
    };
    return ItunesSearchComponent;
}());
ItunesSearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'itunes-search',
        template: "\n        <div>\n            <form class=\"form-inline\" >\n                <div class=\"form-group\">\n                    <input type=\"search\" class=\"form-control\" placeholder=\"Enter search string\" #search >\n                </div>\n                <div class=\"form-group\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"doSearch(search.value)\" >Search</button> \n                </div>\n            </form>\n            <hr />\n            <ul class=\"list-group\">\n                <li class=\"list-group-item\" *ngFor=\"let track of itunes.results\">\n                    <img src=\"{{track.artworkUrl30}}\" >\n                    <a target=\"_blank\" href=\"{{track.trackViewUrl}}\">{{track.trackName}}</a>\n                </li>\n            </ul>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [search_service_1.SearchService])
], ItunesSearchComponent);
exports.ItunesSearchComponent = ItunesSearchComponent;
//# sourceMappingURL=itunes-search.component.js.map