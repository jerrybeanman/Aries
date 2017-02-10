import { MaterialModule } from '@angular/material';
import { FlexDirective } from './flex.directive';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared.module';
import { NgModule } from '@angular/core';

import { ServicesComponent }   from './services.component';

@NgModule({
    imports: [
        SharedModule,
        FormsModule
    ],
    exports: [
        FlexDirective,
        ServicesComponent],
    declarations: [
        ServicesComponent,
        FlexDirective],
    providers: [],
})
export class ServicesModule { }
