import { Component, OnChanges, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EmailCadastradoValidatorService } from "../cadastro/emailCadastrado.validator.service";
import { RecuperarSenhaService } from "./recuperarSenha.service";
import { SenhasDiferentesValidator } from "./senhasIguais.validator";

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
    codigoInvalido = false;
    erroEmail = false;
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
            senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
            confirmarSenha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
        },
        {
            validator: SenhasDiferentesValidator
        })
    }

    enviarEmail(event: Event){
        event.preventDefault();
        const email: Object = this.recuperarSenhaForm.getRawValue();
        if(this.recuperarSenhaForm.valid){
            this.recuperarSenhaService
                .enviaEmail(email)
                .subscribe(() => {
                    this.dados = {...email};
                    this.exibir += 1;
                    setTimeout(() => this.emailEnviado = false, 2500)  
                },
                () => this.erroEmail = true);
        
        }
    }

    enviarCodigo(event: Event){
        event.preventDefault();
        const codigo = this.codigoForm.value.codigo;
        this.dados = {...this.dados, codigo}
        this.recuperarSenhaService
            .enviaCodigo(this.dados)
            .subscribe(() => {
                this.exibir += 1
                setTimeout(() => this.codigoCorreto = false, 2500)  
            },
            () => this.codigoInvalido = true)
    }

    enviarSenha(event: Event){
        event.preventDefault();
        const senha = this.novaSenhaForm.value.senha;
        this.dados = {...this.dados, senha}
        this.recuperarSenhaService
            .enviaSenha(this.dados)
            .subscribe(() => this.router.navigate([''], {queryParams: {pass: true}}))
    }

    voltar(){
        this.router.navigate(['']);
    }
}