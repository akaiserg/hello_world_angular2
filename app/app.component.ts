import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>Hello {{title}}</h1><span>{{count}}<span><button (click)="increaseCount()">Click!</button>'
})
export class AppComponent {
    count = 0;
    tittle = "Hello World";
    increaseCount(){
        this.count++;
    }
 }
