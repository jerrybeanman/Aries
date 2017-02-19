import { Component, OnInit } from '@angular/core';

let $ = require('../../../../node_modules/jquery/dist/jquery.min.js');

@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'] 
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { 
        $(".btn-group > .btn").click(function(){
           $(this).addClass("hover").siblings().removeClass("active");
       });
    }
}