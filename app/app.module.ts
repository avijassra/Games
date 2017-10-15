import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HubConnection } from '@aspnet/signalr-client';

// components
import { AppComponent } from './app.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { TicTacToeGameComponent } from './components/tic-tac-toe/tic-tac-toe.game.component';
import { Puzzle2048Component } from './components/2048/2048.component';
// directive
// Model
//import { TicTacToeGameModel } from './models/tic-tac-toe.model';
//Service
import { AppService } from './services/common.service';
import { ITicTacToeService } from './services/tic-tac-toe/i.tic-tac-toe.service';
import { TicTacToeFactoryService } from './services/tic-tac-toe/tic.-tac-toe.factory.service';
import { TicTacToeTwoPlayerService } from './services/tic-tac-toe/tic-tac-toe.two-player.service';
import { TicTacToeRemoteService } from './services/tic-tac-toe/tic-tac-toe.remote.service';

const routes: Routes = [
    { path: '', redirectTo: 'tic-tac-toe', pathMatch: 'full'},
    { path: 'tic-tac-toe', component: TicTacToeComponent },
    { path: 'tic-tac-toe/:gameId', component: TicTacToeGameComponent },
    { path: '2048', component: Puzzle2048Component },
    // { path: 'users', component: UserComponent },
    // { path: 'itunes-search', component: ItunesSearchComponent },
    { path: '**', component: TicTacToeComponent }
];

@NgModule({
    bootstrap: [ 
        AppComponent 
    ],
    imports: [ 
        BrowserModule,
        HttpModule,
        FormsModule,
        //HubConnection,
        RouterModule.forRoot(routes, { useHash: true})
    ],
    declarations: [ 
        AppComponent,
        TicTacToeComponent,
        TicTacToeGameComponent,
        Puzzle2048Component
    ],
    providers: [
        //TicTacToeGameModel,
        AppService,
        TicTacToeFactoryService
    ],
})
export class AppModule { }