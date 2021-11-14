import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../shared/vmessage/vmessage.module';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';


@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
        LoginComponent
    ],
    exports: [
        SignInComponent,
        SignUpComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule,
        ReactiveFormsModule,
        VMessageModule
    ]
})
export class LoginModule {}