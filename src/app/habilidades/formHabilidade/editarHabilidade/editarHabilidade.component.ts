import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Habilidade } from '../../habilidade/Habilidade';
import { HabilidadeService } from '../../habilidade/habilidade.service';


@Component({
    selector: 'cat-editar-habilidade',
    templateUrl: './editarHabilidade.component.html',
    styleUrls: ['./editarHabilidade.component.css']
})
export class EditarHabilidadeComponent implements OnInit {

    editarForm: FormGroup;
    habilidadeId: number | string = 0;

    constructor(
        private formBuilder: FormBuilder,
        private habilidadeService: HabilidadeService,
        private router: Router) {}


    ngOnInit(): void {
        this.habilidadeId = this.router.url.split('/')[3]
        this.habilidadeService.getHabilidadePorId(this.habilidadeId)
            .subscribe(habilidade => this.editarForm.setValue({nome: habilidade.nome, descricao: habilidade.descricao}))
        
        this.editarForm = this.formBuilder.group({
            nome: ['', Validators.required],
            descricao: ['', Validators.maxLength(300)]
        })
    }

    salvar(){
        if(this.editarForm.valid){
            const novaHabilidade = this.editarForm.getRawValue() as Habilidade;
            this.habilidadeService.editarHabilidade(this.habilidadeId, novaHabilidade)
                .subscribe(() => {
                    this.router.navigate(['home','habilidades']);
                })
        }
    }

    cancelar(){
        this.router.navigate(['home','habilidades']);
    }
}