import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidade } from './Habilidade';
import { HabilidadeService } from './habilidade.service';

@Component({
    selector: 'cat-habilidade',
    templateUrl: './habilidade.component.html',
    styleUrls: ['./habilidade.component.css']
})
export class HabilidadeComponent implements OnInit {

    habilidades: Habilidade[] = [];
    private habilidades$: Observable<Habilidade[]>;

    constructor(private habilidadeService: HabilidadeService) {}


    ngOnInit(): void {
        this.habilidades$ = this.habilidadeService.getHabilidades();

        this.habilidades$.subscribe((habilidades) => {
            this.habilidades = habilidades.map((habilidade) => {
                return { ...habilidade, createdAt: this.formataData(habilidade.createdAt)}
            })
        })
    }

    formataData(data: Date){
        let dataNaoFormatada = new Date(data)
        let dataFormatada = ((dataNaoFormatada.getDate())) + "/" + ((dataNaoFormatada.getMonth() + 1)) + "/" + dataNaoFormatada.getFullYear();
        return dataFormatada
    }

}