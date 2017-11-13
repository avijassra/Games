import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { TicTacToeGameComponent } from './components/tic-tac-toe/tic-tac-toe.game.component';
import { Puzzle2048Component } from './components/2048/2048.component';
// Models
import { TicTacToeGameModel } from './models/tic-tac-toe.model';
// Services
import { TicTacToeFactoryService } from './services/tic-tac-toe/tic.-tac-toe.factory.service';
import { PubSubService } from './services/pubsub.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        TicTacToeComponent,
        TicTacToeGameComponent,
        Puzzle2048Component
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'tic-tac-toe', component: TicTacToeComponent },
            { path: '2048', component: Puzzle2048Component },
            { path: '**', redirectTo: 'home' }
        ], { useHash: true })
    ],
    providers: [
        TicTacToeFactoryService,
        TicTacToeGameModel,
        PubSubService
    ]
})
export class AppModuleShared {
}
