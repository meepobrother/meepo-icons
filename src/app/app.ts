import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from './src';
import { HttpClientModule } from '@angular/common/http';
import { MeepoIconComponent } from './icons/meepo-icon';
@NgModule({
    declarations: [
        MeepoIconComponent
    ],
    imports: [
        CommonModule,
        InlineSVGModule,
        HttpClientModule
    ],
    exports: [
        MeepoIconComponent
    ],
    providers: [],
})
export class IconsModule { }
export { InlineSVGModule, SVGCacheService, InlineSVGDirective } from './src';
