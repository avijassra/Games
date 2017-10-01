import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IJoke, Joke } from '../../models/joke'

@Component({
    moduleId: module.id,
    selector: 'joke-container',    
    template: `
        <div class="container">
            <joke-list>
                <joke [joke]="joke">
                    <h1 class="setup">{{joke.setup}}</h1>
                    <p class="punchline">{{joke.punchline}}</p>
                </joke>
            </joke-list>
        </div>
    `,
})
export class JokeContainerComponent { 
    joke: IJoke = new Joke("What did the Ranch told the frige?", "Close the door, I am dressing here");
}