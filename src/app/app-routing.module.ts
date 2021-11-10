import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from './core/auth/autenticated.guard';
import { AuthGuard } from './core/auth/auth.guard';


import { SignInComponent } from './login/signin/signin.component';
import { SignUpComponent } from './login/signup/signup.component';


const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cadastrar',
    component: SignUpComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
