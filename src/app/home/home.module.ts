import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FooterModule } from '../shared/footer/footer.module';
import { HeaderModule } from '../shared/header/header.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HeaderModule,
        FooterModule
    ]
})
export class HomeModule {}