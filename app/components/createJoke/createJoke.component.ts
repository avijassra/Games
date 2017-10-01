import { Component, Output, EventEmitter } from '@angular/core';
import { IJoke, Joke } from '../../models/joke';

@Component({
    moduleId: module.id,
    selector: 'create-joke',
    template: `
        <div class="card card-block" >
            <div class="form-group">
                <input type="text" class="form-control" placeholder="setup your joke" [(ngModel)]="setup" />
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="hit with punchline" [(ngModel)]="punchline" />
            </div>
            <button type="button" class="btn btn-primary" (click)="submitNewJoke();">Create a Joke</button>
        </div>
    `
})
export class CreateJokeComponent {
    @Output() jokeCreate = new EventEmitter<IJoke>();

    setup: string;
    punchline: string;

    submitNewJoke(setup: string, punchline: string): void {
        this.jokeCreate.emit(new Joke(this.setup, this.punchline));
        this.restControls();
    };

    private restControls(): void {
        this.setup = this.punchline = "";
    }
}