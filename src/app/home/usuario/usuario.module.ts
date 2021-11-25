import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { VMessageModule } from "src/app/shared/vmessage/vmessage.module";
import { CardUsuarioComponent } from "./cardUsuario/cardUsuario.component";
import { FormUsuarioHabilidadeComponent } from "./formUsuarioHabilidade/formUsuarioHabilidade.component";
import { ListaUsuarioComponent } from "./listaUsuario/listaUsuario.component";
import { PerfilUsuarioComponent } from "./perfilUsuario/perfilUsuario.component";

@NgModule({
    declarations: [
        CardUsuarioComponent,
        ListaUsuarioComponent,
        PerfilUsuarioComponent,
        FormUsuarioHabilidadeComponent
    ],
    exports: [
        CardUsuarioComponent,
        ListaUsuarioComponent,
        PerfilUsuarioComponent,
        FormUsuarioHabilidadeComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule
    ]
})
export class UsuarioModule {}