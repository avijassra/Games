import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.componet';
import { Puzzle2048Component } from './components/2048/2048.componet';
// directive
// Model
//Service

const routes: Routes = [
    { path: '', redirectTo: 'ticTacToe', pathMatch: 'full' },
    { path: 'tictactoe', component: TicTacToeComponent },
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
        RouterModule.forRoot(routes, { useHash: true})
    ],
    declarations: [ 
        AppComponent,
        TicTacToeComponent,
        Puzzle2048Component
    ],
    providers: [
        
    ],
})
export class AppModule { }