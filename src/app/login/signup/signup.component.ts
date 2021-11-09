import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/usuario/usuario.service';
import { Usuario } from 'src/app/usuarios/Usuario';

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
    
    formSignup: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private usuarioService: UsuarioService,
        private router: Router
    ){}


    ngOnInit(): void {
        this.formSignup = this.formBuilder.group({
            nome: ['', Validators.required],
            email: ['', Validators.email],
            senha: ['', Validators.required],
            cargo: ['', Validators.required]
        })
    }

    salvar(event: Event){
        event.preventDefault();
        const novoUsuario = this.formSignup.getRawValue() as Usuario;
        this.usuarioService.criaUsuario(novoUsuario)
            .subscribe(() => {
                this.router.navigate(['']);
            })
    }
}