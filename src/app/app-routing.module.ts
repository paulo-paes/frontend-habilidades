import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './core/auth/autenticated.guard';
import { AuthGuard } from './core/auth/auth.guard';
import { CadastroComponent } from './login/cadastro/cadastro.component';


import { LoginComponent } from './login/login/login.component';
import { RecuperarSenhaComponent } from './login/recuperarSenha/recuperarSenha.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Login - Catálogo de Habilidades'
    }
  },
  {
    path: 'cadastrar',
    component: CadastroComponent,
    data: {
      title: 'Cadastro - Catálogo de Habilidades'
    }
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [AuthenticatedGuard]
  },
  /* {
    path: '**',
    redirectTo: ''
  }, */
  {
    path: 'esquecisenha',
    component: RecuperarSenhaComponent,
    data: {
      title: 'Recuperar Senha - Catálogo de Habilidades'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
