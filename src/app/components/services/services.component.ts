import { GalleryComponent } from 'angular2-image-gallery';
import { Component, ViewChild, OnInit } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';

let $ = require('../../../../node_modules/jquery/dist/jquery.min.js');
@Component({
    selector: 'services',
    templateUrl: 'services.component.html',
    styleUrls: ['services.component.css']
})
export class ServicesComponent implements OnInit {

    isOpened: boolean;
    constructor() { 
        this.isOpened = false;
    }

    ngOnInit() { 
    }

    public open (isOpened: boolean) {
        this.isOpened = isOpened;
        console.warn(this.isOpened);
    }

    public getColorByDayOfWeek( day: number ) {
        let date: Date = new Date();
        if(date.getDay() == day) {
            return "yellow"
        }
        return "";
    }
}