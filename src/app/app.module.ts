import { MaterialModule } from '@angular/material';
import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { BrowserModule }          from '@angular/platform-browser';
import { 
        FormsModule,
        ReactiveFormsModule }     from '@angular/forms';
import { HttpModule }             from '@angular/http';

import { AppComponent }           from './app.component';

import { SharedModule }           from './shared.module';
import { 
        HomeModule,
        HeaderModule,
        FooterModule }            from './core';

import { 
        CarouselModule,
        AlertModule }             from 'ng2-bootstrap';

import { ServicesModule } from './components';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,

    MaterialModule.forRoot(),
    CarouselModule.forRoot(),
    AlertModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBeB7mBEaRZmVlzWYi3XKGCJ2p3K__YNDw'
    }),
    HomeModule,
    HeaderModule,
    ServicesModule,
    FooterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
