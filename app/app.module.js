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
var jokes_container_component_1 = require("./components/jokes/jokes-container.component");
var jokes_component_1 = require("./components/jokes/jokes.component");
var joke_component_1 = require("./components/joke/joke.component");
var createJoke_component_1 = require("./components/createJoke/createJoke.component");
var parent_container_component_1 = require("./components/parentDi/parent-container.component");
var child_di_component_1 = require("./components/childDi/child-di.component");
var parent_di_component_1 = require("./components/parentDi/parent-di.component");
var user_component_1 = require("./components/user/user.component");
var itunes_search_component_1 = require("./components/itunesSearch/itunes-search.component");
// directive
var cardHover_directive_1 = require("./directives/cardHover.directive");
// Model
var simple_model_1 = require("./models/simple.model");
var user_model_1 = require("./models/user.model");
var searchItem_model_1 = require("./models/searchItem.model");
//Service
var user_service_1 = require("./services/user.service");
var search_service_1 = require("./services/search.service");
var routes = [
    { path: '', redirectTo: 'jokes', pathMatch: 'full' },
    { path: 'jokes', component: jokes_container_component_1.JokeContainerComponent },
    { path: 'di-test', component: parent_container_component_1.ParentDiContainerComponent },
    { path: 'users', component: user_component_1.UserComponent },
    { path: 'itunes-search', component: itunes_search_component_1.ItunesSearchComponent },
    { path: '**', component: jokes_container_component_1.JokeContainerComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
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
            jokes_container_component_1.JokeContainerComponent,
            jokes_component_1.JokeListComponent,
            joke_component_1.JokeComponent,
            createJoke_component_1.CreateJokeComponent,
            cardHover_directive_1.CardHoverDirective,
            parent_container_component_1.ParentDiContainerComponent,
            parent_di_component_1.ParentDiComponent,
            child_di_component_1.ChildDiComponent,
            user_component_1.UserComponent,
            itunes_search_component_1.ItunesSearchComponent
        ],
        providers: [
            simple_model_1.SimpleModel,
            user_service_1.UserService,
            search_service_1.SearchService,
            searchItem_model_1.SearchItem,
            user_model_1.UserModel
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map