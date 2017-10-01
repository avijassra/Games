import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { SearchItem } from '../../models/searchItem.model';

@Component({
    moduleId: module.id,
    selector: 'itunes-search',
    template: `
        <div>
            <form class="form-inline" >
                <div class="form-group">
                    <input type="search" class="form-control" placeholder="Enter search string" #search >
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-primary" (click)="doSearch(search.value)" >Search</button> 
                </div>
            </form>
            <hr />
            <!--
            <ul class="list-group">
                <li class="list-group-item" *ngFor="let track of searchItem">
                    <img src="{{track.artworkUrl30}}" >
                    <a target="_blank" href="{{track.trackViewUrl}}">{{track.trackName}}</a>
                </li>
            </ul>
            -->
        </div>
    `
})
export class ItunesSearchComponent {
    constructor(private searchSrvc: SearchService, private searchItem: SearchItem ) { 
    }

    doSearch(term: string) {
        debugger;
        this.searchSrvc.search(term);
    }
}