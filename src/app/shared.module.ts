/************************ 1st Party Imports ************************/
import { CommonModule }                     from "@angular/common";
import { NgModule }                         from "@angular/core";
import { BrowserModule }                    from "@angular/platform-browser";
import { MaterialModule }                   from '@angular/material';
import {
    FormsModule,
    ReactiveFormsModule }                   from "@angular/forms";
import { HttpModule }                       from "@angular/http";
import { RouterModule }                     from "@angular/router";
import { Angular2FontawesomeModule }        from 'angular2-fontawesome/angular2-fontawesome'

const moduleExports = [
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    Angular2FontawesomeModule,
    MaterialModule,
]

@NgModule({
    declarations: [
    ],
    exports: [
        ...moduleExports
    ]
})
export class SharedModule { }