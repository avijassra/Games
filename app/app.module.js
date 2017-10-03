"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
// components
var app_component_1 = require("./app.component");
var tic_tac_toe_componet_1 = require("./components/tic-tac-toe/tic-tac-toe.componet");
var _2048_componet_1 = require("./components/2048/2048.componet");
// directive
// Model
//Service
var routes = [
    { path: '', redirectTo: 'ticTacToe', pathMatch: 'full' },
    { path: 'tictactoe', component: tic_tac_toe_componet_1.TicTacToeComponent },
    { path: '2048', component: _2048_componet_1.Puzzle2048Component },
    // { path: 'users', component: UserComponent },
    // { path: 'itunes-search', component: ItunesSearchComponent },
    { path: '**', component: tic_tac_toe_componet_1.TicTacToeComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(routes, { useHash: true })
            ],
            declarations: [
                app_component_1.AppComponent,
                tic_tac_toe_componet_1.TicTacToeComponent,
                _2048_componet_1.Puzzle2048Component
            ],
            providers: [],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map