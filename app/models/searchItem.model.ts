import { Injectable } from '@angular/core';

@Injectable()
export class SearchItem {
    constructor(
        public name: string,
        public artist: string,
        public link: string,
        public thumbnail: string,
        public artistId: string
    ) { }
}