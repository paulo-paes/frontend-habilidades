import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { SignInComponent } from './login/signin/signin.component';
import { SignUpComponent } from './login/signup/signup.component';


const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'cadastrar',
    component: SignUpComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
