import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/usuario/usuario.service';
import { UsuarioPerfil } from 'src/app/home/usuario/perfilUsuario/UsuarioPerfil';
import { EmailCadastradoValidatorService } from './emailCadastrado.validator.service';

@Component({
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
    
    registerForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private usuarioService: UsuarioService,
        private router: Router,
        private emailCadastroValidatorService: EmailCadastradoValidatorService
    ){}


    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
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
        if(this.registerForm.valid && !this.registerForm.pending){
            const novoUsuario = this.registerForm.getRawValue() as UsuarioPerfil;
            this.usuarioService.criaUsuario(novoUsuario)
            .subscribe(() => {
                    this.router.navigate([''], {queryParams: {created: true}});
                })
        }
    }
}