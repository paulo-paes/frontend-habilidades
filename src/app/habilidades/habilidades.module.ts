import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EditarHabilidadeComponent } from './formHabilidade/editarHabilidade/editarHabilidade.component';
import { FormHabilidadeComponent } from './formHabilidade/formHabilidade.component';
import { HabilidadeComponent } from './habilidade/habilidade.component';

@NgModule({
    declarations: [
        HabilidadeComponent, 
        FormHabilidadeComponent,
        EditarHabilidadeComponent
    ],
    exports: [
        HabilidadeComponent, 
        FormHabilidadeComponent,
        EditarHabilidadeComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class HabilidadesModule {}