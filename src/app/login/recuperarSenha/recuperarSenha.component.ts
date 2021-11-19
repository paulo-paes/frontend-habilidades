import { Component, OnInit } from "@angular/core";
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
    }

    enviarEmail(event: Event){
        event.preventDefault();
        const email: Object = this.recuperarSenhaForm.getRawValue();
        console.log(email)
        this.recuperarSenhaService
            .enviaEmail(email)
            .subscribe(() => console.log("success"));
    }

    voltar(){
        this.router.navigate(['']);
    }
}