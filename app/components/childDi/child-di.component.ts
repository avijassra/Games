import { Component } from '@angular/core';
import { SimpleModel } from '../../models/simple.model';

@Component({
    moduleId: module.id,
    selector: 'child-di',
    template: `
        <div class="child" >
            <p>Child DI</p>
            {{ service.value }}
        </div>
    `,
    styles: [
        '.child { background-color: #229CDD; padding: 10px; } '
    ]
})
export class ChildDiComponent {
    constructor(private service: SimpleModel) { }
}