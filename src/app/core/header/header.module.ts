import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { NgModule } from '@angular/core';

import { HeaderComponent }   from './header.component';
import { SharedModule } from './../../shared.module';

@NgModule({
    imports: [
        SharedModule,
        Ng2PageScrollModule
    ],
    exports: [
        HeaderComponent
    ],
    declarations: [
        HeaderComponent
    ],
    providers: []
})
export class HeaderModule { }