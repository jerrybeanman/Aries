import { GalleryComponent } from 'angular2-image-gallery';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
    selector: 'services',
    templateUrl: 'services.component.html',
    styleUrls: ['services.component.css']
})
export class ServicesComponent implements OnInit {
     @ViewChild(GalleryComponent) a : GalleryComponent; 

    constructor() { }

    ngOnInit() { 
    }
}