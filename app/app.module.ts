import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { JokeContainerComponent } from './components/jokes/jokes-container.component';
import { JokeListComponent } from './components/jokes/jokes.component';
import { JokeComponent } from './components/joke/joke.component';
import { CreateJokeComponent } from './components/createJoke/createJoke.component';
import { ParentDiContainerComponent } from './components/parentDi/parent-container.component';
import { ChildDiComponent } from './components/childDi/child-di.component';
import { ParentDiComponent } from './components/parentDi/parent-di.component';
import { UserComponent } from './components/user/user.component';
import { ItunesSearchComponent } from './components/itunesSearch/itunes-search.component';
// directive
import { CardHoverDirective } from './directives/cardHover.directive';
// Model
import { SimpleModel } from './models/simple.model';
import { UserModel } from './models/user.model';
import { SearchItem } from './models/searchItem.model'
//Service
import { UserService } from './services/user.service';
import { SearchService } from './services/search.service';

const routes: Routes = [
    { path: '', redirectTo: 'jokes', pathMatch: 'full' },
    { path: 'jokes', component: JokeContainerComponent },
    { path: 'di-test', component: ParentDiContainerComponent },
    { path: 'users', component: UserComponent },
    { path: 'itunes-search', component: ItunesSearchComponent },
    { path: '**', component: JokeContainerComponent }
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
        JokeContainerComponent,
        JokeListComponent,
        JokeComponent,
        CreateJokeComponent,
        CardHoverDirective,
        ParentDiContainerComponent,
        ParentDiComponent,
        ChildDiComponent,
        UserComponent,
        ItunesSearchComponent
    ],
    providers: [
        SimpleModel,
        UserService,
        SearchService,
        SearchItem,
        UserModel
    ],
})
export class AppModule { }