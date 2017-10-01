import { Component } from '@angular/core';
import { SimpleModel } from '../../models/simple.model';

@Component({
    moduleId: module.id,
    selector: 'parent-di-container',
    template: `
        <div class="row" >
            <div class="col-lg-6" >
                <parent-di></parent-di>
            </div>
            <div class="col-lg-6" >
                <parent-di></parent-di>
            </div>
        </div>
    `
})
export class ParentDiContainerComponent {
    constructor(private service: SimpleModel) { }
}