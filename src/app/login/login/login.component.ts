import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UsuarioLogin } from './UsuarioLogin';


@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    loginForm: FormGroup;
    erroLogado: boolean = false;

    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private router: Router
    ){}


    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', 
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            senha: ['', 
                [
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(16)
                ]
        ]
        })
    }

    logar(event: Event){
        event.preventDefault();
        if(this.loginForm.valid){
            const usuario = this.loginForm.getRawValue() as UsuarioLogin;
            this.authService.authenticate(usuario)
                .subscribe(() => {
                    this.router.navigate(['home'])
                    console.log("teste")
                },
                () => this.erroLogado = true)
        }
    }

    cadastrar(){
        this.router.navigate(['cadastrar'])
    }
}