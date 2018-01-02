import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';
import { MeepoIconComponent } from './icons/meepo-icon';
import { IonComponent } from './ion/ion';
@NgModule({
    declarations: [
        MeepoIconComponent,
        IonComponent
    ],
    imports: [
        CommonModule,
        InlineSVGModule,
        HttpClientModule
    ],
    exports: [
        MeepoIconComponent,
        IonComponent
    ],
    providers: [],
})
export class IconsModule { }
