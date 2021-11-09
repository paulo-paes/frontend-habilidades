import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';


@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent
    ],
    exports: [
        SignInComponent,
        SignUpComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule
    ]
})
export class LoginModule {}