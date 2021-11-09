import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UsuarioLogin } from './UsuarioLogin';

@Component({
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit{

    formSignin: FormGroup;

    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router
    ){}


    ngOnInit(): void {
        this.formSignin = this.formBuilder.group({
            email: ['', Validators.required],
            senha: ['', Validators.required]
        })
    }

    logar(){
        const usuario = this.formSignin.getRawValue() as UsuarioLogin;
        this.authService.authenticate(usuario)
            .subscribe(() => {
                this.router.navigate(['home'])
            })
    }
}