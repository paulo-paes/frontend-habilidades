import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidade } from 'src/app/habilidades/habilidade/Habilidade';
import { HabilidadeService } from 'src/app/habilidades/habilidade/habilidade.service';

@Component({
    selector: 'cat-form-usuario-habilidade',
    templateUrl: './formUsuarioHabilidade.component.html',
    styleUrls: ['./formUsuarioHabilidade.component.css']
})
export class FormUsuarioHabilidadeComponent implements OnInit {

    usuarioHabForm: FormGroup;
    habilidades: Habilidade[];

    constructor(
        private formBuilder: FormBuilder,
        private habilidadeService: HabilidadeService) {}


    ngOnInit(): void {
        this.usuarioHabForm = this.formBuilder.group({
            habilidade: ['', Validators.required],
            nivel: [1, Validators.required]
        })

        this.habilidadeService.getHabilidades().subscribe((result) => this.habilidades = result)
    }

    salvar(){
        console.log("salvando")
    }

    cancelar(){
        console.log("Cancelando")
    }


}