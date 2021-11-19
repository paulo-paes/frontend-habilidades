import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    templateUrl: './recuperarSenha.component.html',
    styleUrls: ['./recuperarSenha.component.css']
})
export class RecuperarSenhaComponent implements OnInit {

    recuperarSenhaForm: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder
    ) {}

    
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    voltar(){
        this.router.navigate(['']);
    }
}