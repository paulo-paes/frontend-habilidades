import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home.routing.module';
import { RouterModule } from '@angular/router';
import { HabilidadesModule } from '../habilidades/habilidades.module';
import { HttpClientModule} from '@angular/common/http';
import { LogsComponent } from './logs/logs.component';
import { VMessageModule } from '../shared/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioModule } from './usuario/usuario.module';
import { PaginaInicialModule } from './paginaInicial/paginaInicial.module';

@NgModule({
    declarations: [
        LogsComponent
    ],
    exports: [
        LogsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HabilidadesModule,
        VMessageModule,
        ReactiveFormsModule,
        HttpClientModule,
        UsuarioModule,
        PaginaInicialModule,
        HomeRoutingModule
    ]
})
export class HomeModule {}