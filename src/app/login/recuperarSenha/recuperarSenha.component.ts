import { Component, OnChanges, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EmailCadastradoValidatorService } from "../cadastro/emailCadastrado.validator.service";
import { RecuperarSenhaService } from "./recuperarSenha.service";

@Component({
    templateUrl: './recuperarSenha.component.html',
    styleUrls: ['./recuperarSenha.component.css']
})
export class RecuperarSenhaComponent implements OnInit, OnChanges {

    recuperarSenhaForm: FormGroup;
    codigoForm: FormGroup;
    novaSenhaForm: FormGroup;
    exibir = 2;
    dados: any = {};
    codigoUuid = '';

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private emailCadastroValidatorService: EmailCadastradoValidatorService,
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
        this.exibir = 0;
        this.codigoUuid = '';
    }

    ngOnChanges(){
        // if(this.exibir == 1){
        //     this.codigoForm = this.formBuilder.group({
        //         codigo: ['', [Validators.required]]
        //     })
        // }else if(this.exibir == 2){
        //     this.novaSenhaForm = this.formBuilder.group({
        //         senha: ['', Validators.required],
        //         confirmarSenha: ['', Validators.required]
        //     })
        // }
    }

    enviarEmail(event: Event){
        event.preventDefault();
        const email: Object = this.recuperarSenhaForm.getRawValue();
        console.log(email)
        this.recuperarSenhaService
            .enviaEmail(email)
            .subscribe(() => {
                this.dados = {...email};  
                this.exibir += 1;
            });
    }

    enviarCodigo(event: Event){
        event.preventDefault();
        console.log(this.codigoForm)
        const codigo = this.codigoForm.value.codigo;
        this.dados = {...this.dados, codigo}
        console.log(this.dados)
        this.recuperarSenhaService
            .enviaCodigo(this.dados)
            .subscribe(() => this.exibir += 1)
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