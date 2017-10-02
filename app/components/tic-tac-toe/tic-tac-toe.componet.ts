import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'parent-di',
    template: `
        <div class="parent" >
            <p>Parent DI</p>
            <form novalidation>
                <div class="form-group" >
                    Hello World    
                </div>
            </form>
        </div>
    `,
    styles: [
        '.parent { background-color: #D0E751; padding: 10px; } '
    ]
})export class TicTacToeComponent {

}