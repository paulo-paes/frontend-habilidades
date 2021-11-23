import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isGestorGuard } from '../core/auth/isGestor.guard';
import { EditarHabilidadeComponent } from '../habilidades/formHabilidade/editarHabilidade/editarHabilidade.component';
import { FormHabilidadeComponent } from '../habilidades/formHabilidade/formHabilidade.component';
import { HabilidadeComponent } from '../habilidades/habilidade/habilidade.component';
import { FormUsuarioHabilidadeComponent } from '../usuarios/formUsuarioHabilidade/formUsuarioHabilidade.component';
import { LogsComponent } from './logs/logs.component';
// import { ListaUsuariosComponent } from '../usuarios/listaUsuario/listaUsuarios.component';
import { NovaHomeComponent } from './novaHome/novaHome.component';
import { ListaUsuarioComponent } from './novoUsuario/novaLista/listaUsuario.component';
import { PerfilUsuarioComponent } from './perfilUsuario/perfilUsuario.component';



const routes: Routes = [
    
    {
        path: '',
        component: NovaHomeComponent,
        children: [
            {
                path: '',
                component: ListaUsuarioComponent,
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
                },
                canActivate: [isGestorGuard],
            },
            {
                path: 'editar-habilidade/:id',
                component: EditarHabilidadeComponent,
                canActivate: [isGestorGuard],
                data: {
                    title: 'Editar Habilidade - Catálogo de Habilidades'
                }
            },
            {
                path: 'vincular-habilidade',
                component: FormUsuarioHabilidadeComponent,
                data: {
                    title: 'Vinculo de Habilidade - Catálogo de Habilidades'
                }
            },
            {
                path: 'usuario/:id',
                component: PerfilUsuarioComponent,
                data: {
                    title: 'Perfil - Catálogo de Habilidades'
                }
            },
            {
                path: 'logs',
                component: LogsComponent,
                canActivate: [isGestorGuard],
                data: {
                    title: 'Logs - Catálogo de Habilidades'
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
