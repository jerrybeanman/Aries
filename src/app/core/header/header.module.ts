import { NgModule } from '@angular/core';

import { HeaderComponent }   from './header.component';
import { SharedModule } from './../../shared.module';

@NgModule({
    imports: [
        SharedModule
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