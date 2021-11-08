import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormUsuarioHabilidadeComponent } from './formUsuarioHabilidade/formUsuarioHabilidade.component';
import { ListaUsuariosComponent } from './listaUsuario/listaUsuarios.component';

@NgModule({
    declarations: [
        ListaUsuariosComponent,
        FormUsuarioHabilidadeComponent
    ],
    exports: [
        ListaUsuariosComponent,
        FormUsuarioHabilidadeComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class UsuariosModule {}