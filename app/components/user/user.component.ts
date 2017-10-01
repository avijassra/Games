import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, RequestOptions, Headers, Response } from '@angular/http'
import { RouterLink } from '@angular/router';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'user-info',    
    template: `
        <div>
            <form #userForm="ngForm" (ngSubmit)="onSubmit();">
                <div class="form-group">
                    <input type="text" class="form-control" name="id" [(ngModel)]="model.id" readonly="readonly" >
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="firstname" required [(ngModel)]="model.firstname" >
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" name="lastname" required [(ngModel)]="model.lastname" >
                </div>
                <div class="form-group">
                    <input type="email" class="form-control" name="email" required [(ngModel)]="model.email" >
                </div>
                <div class="form-group">
                    <input type="number" class="form-control" name="age" required [(ngModel)]="model.age" >
                </div>
                <div class="form-group">
                    <select class="form-control" name="language" [(ngModel)]="model.language" >
                        <option value="">Please select a language</option>
                        <option *ngFor="let lang of langs" [value]="lang">{{lang}}</option>
                    </select>
                </div>
                    <pre>{{ model | json }}</pre>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" >Submit</button> 
                </div>
            </form>
        </div>
    `,
})
export class UserComponent implements OnInit { 
    model: UserModel = new UserModel();
    langs: string[];

    constructor(private userSrvc: UserService) {
    }

    ngOnInit() {
        this.langs = [
            'English',
            'French',
            'German'
        ];
    }

    onSubmit(): void {
        this.userSrvc.Post(this.model)
            .then(resp => {
                    debugger;
                    this.model.id = resp.id
                }
            );
    }
}