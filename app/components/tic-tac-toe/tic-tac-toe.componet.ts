import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'parent-di',
    templateUrl: 'tic-tac-toe.component.html',
    styles: [`  
                .ttt-g table { margin: 0px auto; float: none; }
                .ttt-g table tr td { width: 150px !important; height: 150px !important; border: 2px solid #000; }
                .ttt-g table tr td:first-child { border-left: none;}
                .ttt-g table tr:first-child td { border-top: none;}
                .ttt-g table tr td:last-child { border-right: none;}
                .ttt-g table tr:last-child td { border-bottom: none;}`]
})
export class TicTacToeComponent {

}