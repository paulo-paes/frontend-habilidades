import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/usuario/usuario.service';
import { Usuario } from 'src/app/usuarios/Usuario';
import { EmailCadastradoValidatorService } from './emailCadastrado.validator.service';

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
    
    formSignup: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private usuarioService: UsuarioService,
        private router: Router,
        private emailCadastroValidatorService: EmailCadastradoValidatorService
    ){}


    ngOnInit(): void {
        this.formSignup = this.formBuilder.group({
            nome: ['', Validators.required],
            email: ['', 
                [
                    Validators.email,
                    Validators.required
                ],
                this.emailCadastroValidatorService.verificaEmailCadastrado()
            ],
            senha: ['', 
                [
                    Validators.required,
                    Validators.maxLength(16),
                    Validators.minLength(8)
                ]
            ],
            cargo: ['', Validators.required]
        })
    }

    salvar(event: Event){
        event.preventDefault();
        if(this.formSignup.valid && !this.formSignup.pending){
            const novoUsuario = this.formSignup.getRawValue() as Usuario;
            this.usuarioService.criaUsuario(novoUsuario)
                .subscribe(() => {
                    this.router.navigate(['']);
                })
        }
    }
}