import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/vmessage/vmessage.module';
import { FormUsuarioHabilidadeComponent } from './formUsuarioHabilidade/formUsuarioHabilidade.component';
import { HabilidadeUsuarioComponent } from './listaUsuario/habilidadeUsuario/habilidadeUsuario.component';
import { ListaUsuariosComponent } from './listaUsuario/listaUsuarios.component';

@NgModule({
    declarations: [
        ListaUsuariosComponent,
        FormUsuarioHabilidadeComponent,
        HabilidadeUsuarioComponent
    ],
    exports: [
        ListaUsuariosComponent,
        FormUsuarioHabilidadeComponent,
        HabilidadeUsuarioComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule
    ]
})
export class UsuariosModule {}