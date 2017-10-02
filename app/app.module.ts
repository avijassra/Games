import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.componet';
// directive
// Model
//Service

const routes: Routes = [
    { path: '', redirectTo: 'jokes', pathMatch: 'full' },
    { path: 'tictactoe', component: TicTacToeComponent },
    // { path: 'di-test', component: ParentDiContainerComponent },
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
        TicTacToeComponent
    ],
    providers: [
        
    ],
})
export class AppModule { }