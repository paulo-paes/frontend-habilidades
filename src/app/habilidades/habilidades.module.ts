import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormHabilidadeComponent } from './formHabilidade/formHabilidade.component';
import { HabilidadeComponent } from './habilidade/habilidade.component';

@NgModule({
    declarations: [
        HabilidadeComponent, 
        FormHabilidadeComponent
    ],
    exports: [
        HabilidadeComponent, 
        FormHabilidadeComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class HabilidadesModule {}