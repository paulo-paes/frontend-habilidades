import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormHabilidadeComponent } from '../habilidades/formHabilidade/formHabilidade.component';
import { HabilidadeComponent } from '../habilidades/habilidade/habilidade.component';
import { FormUsuarioHabilidadeComponent } from '../usuarios/formUsuarioHabilidade/formUsuarioHabilidade.component';
import { ListaUsuariosComponent } from '../usuarios/listaUsuario/listaUsuarios.component';
import { HomeComponent } from './home.component';



const routes: Routes = [
    
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: ListaUsuariosComponent
            },
            {
                path: 'habilidades',
                component: HabilidadeComponent
            },
            {
                path: 'nova-habilidade',
                component: FormHabilidadeComponent
            },
            {
                path: 'vincular-habilidade',
                component: FormUsuarioHabilidadeComponent
            }
        ]
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
