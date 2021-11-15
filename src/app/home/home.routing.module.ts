import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormHabilidadeComponent } from '../habilidades/formHabilidade/formHabilidade.component';
import { HabilidadeComponent } from '../habilidades/habilidade/habilidade.component';
import { FormUsuarioHabilidadeComponent } from '../usuarios/formUsuarioHabilidade/formUsuarioHabilidade.component';
import { ListaUsuariosComponent } from '../usuarios/listaUsuario/listaUsuarios.component';
import { HomeComponent } from './home.component';
import { NovaHomeComponent } from './novaHome/novaHome.component';



const routes: Routes = [
    
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: ListaUsuariosComponent,
                data: {
                    title: 'Home - Catálogo de Habilidades'
                }
            },
            {
                path: 'habilidades',
                component: HabilidadeComponent,
                data: {
                    title: 'Habilidades - Catálogo de Habilidades'
                }
            },
            {
                path: 'nova-habilidade',
                component: FormHabilidadeComponent,
                data: {
                    title: 'Nova Habilidade - Catálogo de Habilidades'
                }
            },
            {
                path: 'vincular-habilidade',
                component: FormUsuarioHabilidadeComponent,
                data: {
                    title: 'Vinculo de Habilidade - Catálogo de Habilidades'
                }
            }
        ]
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
