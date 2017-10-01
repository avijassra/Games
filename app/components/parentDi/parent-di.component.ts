import { Component } from '@angular/core';
import { SimpleModel } from '../../models/simple.model';

@Component({
    moduleId: module.id,
    selector: 'parent-di',
    template: `
        <div class="parent" >
            <p>Parent DI</p>
            <form novalidation>
                <div class="form-group" >
                    <input type="text" class="form-control" name="value" [(ngModel)]="service.value" >
                </div>
            </form>
            <child-di></child-di>
        </div>
    `,
    styles: [
        '.parent { background-color: #D0E751; padding: 10px; } '
    ]
})
export class ParentDiComponent {
    constructor(private service: SimpleModel) { }
}