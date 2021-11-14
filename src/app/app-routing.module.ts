import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './core/auth/autenticated.guard';
import { AuthGuard } from './core/auth/auth.guard';


import { LoginComponent } from './login/login/login.component';
import { SignUpComponent } from './login/signup/signup.component';


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
    component: SignUpComponent,
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
    path: 'teste',
    pathMatch: 'full',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
