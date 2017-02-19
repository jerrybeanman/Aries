import { FlexDirective } from './flex.directive';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared.module';
import { NgModule } from '@angular/core';

import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

import { ServicesComponent }   from './services.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        Angular2ImageGalleryModule,
        AgmCoreModule
    ],
    exports: [
        FlexDirective,
        ServicesComponent
    ],
    declarations: [
        ServicesComponent,
        FlexDirective
    ],
    providers: [],
})
export class ServicesModule { }
