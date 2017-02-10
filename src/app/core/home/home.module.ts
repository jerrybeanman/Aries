import { FormsModule }            from '@angular/forms';
import { NgModule }               from '@angular/core';

import { HomeComponent }          from './home.component';
import { SharedModule }           from './../../shared.module';
import { ImageService }           from './../../components/';

import { CarouselModule }         from 'ng2-bootstrap';
@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        CarouselModule
    ],
    exports: [HomeComponent],
    declarations: [
        HomeComponent
    ],
    providers: [ImageService]
})
export class HomeModule { }
