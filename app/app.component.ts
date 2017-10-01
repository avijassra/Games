import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IJoke, Joke } from './models/joke'
import { RouterLink } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-app',    
    template: `
        <div class="container">
            <nav>
                <a>Navigation:</a>
                <ul>
                    <li><a [routerLink]="['jokes']">Jokes</a></li>
                    <li><a [routerLink]="['di-test']">DI Test</a></li>
                    <li><a [routerLink]="['users']">Users</a></li>
                    <!--<li><a [routerLink]="['itunes-search']">iTunes Search</a></li>-->
                </ul>
            </nav>
            <router-outlet></router-outlet>
        </div>
    `,
})
export class AppComponent { 
}