import { Component, Input } from '@angular/core';
import { IJoke } from '../../models/joke';

@Component({
    moduleId: module.id,
    selector: 'joke',
    template: `
        <div>
            <div class="card card-block" cardHover>
                <div class="card-title">
                    <ng-content select=".setup"></ng-content>
                </div>
                <div class="card-text" [hidden]="joke.hide">
                    <ng-content select=".punchline"></ng-content>
                </div>
                <div>
                    <button class="btn btn-warning" (click)="joke.togglePunchline()">Toggle</button>
                </div>
            </div>
            <div class="row" style="min-height:5px" ></div>
        </div>
    `
})
export class JokeComponent {
    @Input() joke: IJoke;
}