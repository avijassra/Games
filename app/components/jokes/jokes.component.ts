import { Component, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { IJoke, Joke } from '../../models/joke';
import { JokeComponent } from '../joke/joke.component';

@Component({
    moduleId: module.id,
    selector: 'joke-list',    
    template: `
        <create-joke (jokeCreate)="addJokeToDisplay($event)"></create-joke>
        <hr />
        <joke *ngFor="let j of jokes" [joke]="j" >
            <h1 class="setup">{{j.setup}}</h1>
            <p class="punchline">{{j.punchline}}</p>
        </joke>
        <h4>Content Jokes</h4>
        <ng-content></ng-content>
    `
})
export class JokeListComponent implements AfterViewInit {
    jokes: IJoke[] = [
        new Joke("Why Does orange stopped rolling down the hill", "It ran out of juice"),
        new Joke("Why did the skeleton not go to the party?", "He had no-body to go with.")
    ];

    @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;

    ngAfterViewInit() {
        let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    }

    addJokeToDisplay(joke: IJoke): void {
        this.jokes.unshift(joke);
    }
}