import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
