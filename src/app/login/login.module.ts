import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../shared/vmessage/vmessage.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { RecuperarSenhaComponent } from './recuperarSenha/recuperarSenha.component';



@NgModule({
    declarations: [
        LoginComponent,
        CadastroComponent,
        RecuperarSenhaComponent
    ],
    exports: [
        LoginComponent,
        CadastroComponent,
        RecuperarSenhaComponent
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