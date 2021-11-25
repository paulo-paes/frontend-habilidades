import { Component, OnChanges, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EmailCadastradoValidatorService } from "../cadastro/emailCadastrado.validator.service";
import { RecuperarSenhaService } from "./recuperarSenha.service";

@Component({
    templateUrl: './recuperarSenha.component.html',
    styleUrls: ['./recuperarSenha.component.css']
})
export class RecuperarSenhaComponent implements OnInit {

    recuperarSenhaForm: FormGroup;
    codigoForm: FormGroup;
    novaSenhaForm: FormGroup;
    exibir = 0;
    emailEnviado = true;
    codigoCorreto = true;
    dados: any = {};
    codigoUuid = '';

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private recuperarSenhaService: RecuperarSenhaService
    ) {}


    ngOnInit(): void {
        this.recuperarSenhaForm = this.formBuilder.group({
            email: ['', [Validators.email, Validators.required]]
        })
        this.codigoForm = this.formBuilder.group({
            codigo: ['', [Validators.required]]
        })
        this.novaSenhaForm = this.formBuilder.group({
            senha: ['', Validators.required],
            confirmarSenha: ['', Validators.required]
        })
        this.codigoUuid = '';
    }

    enviarEmail(event: Event){
        event.preventDefault();
        const email: Object = this.recuperarSenhaForm.getRawValue();
        if(this.recuperarSenhaForm.valid){
            this.recuperarSenhaService
                .enviaEmail(email)
                .subscribe(() => {
                    this.dados = {...email};
                    setTimeout(() => this.emailEnviado = false, 2500)  
                });
        
        }
    }

    enviarCodigo(event: Event){
        event.preventDefault();
        console.log(this.codigoForm)
        const codigo = this.codigoForm.value.codigo;
        this.dados = {...this.dados, codigo}
        console.log(this.dados)
        this.recuperarSenhaService
            .enviaCodigo(this.dados)
            .subscribe(() => {
                this.exibir += 1
                setTimeout(() => this.codigoCorreto = false, 2500)  
            })
    }

    enviarSenha(event: Event){
        event.preventDefault();
        const senha = this.novaSenhaForm.value.senha;
        this.dados = {...this.dados, senha}
        this.recuperarSenhaService
            .enviaSenha(this.dados)
            .subscribe(() => this.router.navigate(['']))
    }

    voltar(){
        this.router.navigate(['']);
    }
}