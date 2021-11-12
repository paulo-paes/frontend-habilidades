import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Habilidade } from '../habilidade/Habilidade';
import { HabilidadeService } from '../habilidade/habilidade.service';

@Component({
    selector: 'cat-form-habilidade',
    templateUrl: './formHabilidade.component.html',
    styleUrls: ['./formHabilidade.component.css']
})
export class FormHabilidadeComponent implements OnInit {

    habilidadeForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private habilidadeService: HabilidadeService,
        private router: Router) {}


    ngOnInit(): void {
        this.habilidadeForm = this.formBuilder.group({
            nome: ['', Validators.required],
            descricao: ['', Validators.maxLength(300)]
        })
    }

    salvar(){
        const novaHabilidade = this.habilidadeForm.getRawValue() as Habilidade;
        this.habilidadeService.criaHabilidade(novaHabilidade)
            .subscribe(() => {
                this.router.navigate(['home','habilidades']);
            })
    }

    cancelar(){
        this.router.navigate(['home','habilidades']);
    }
}