import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidade } from './Habilidade';
import { HabilidadeService } from './habilidade.service';

@Component({
    selector: 'cat-habilidade',
    templateUrl: './habilidade.component.html'
})
export class HabilidadeComponent implements OnInit {

    habilidades: Habilidade[] = [];
    private habilidades$: Observable<Habilidade[]>;

    constructor(private habilidadeService: HabilidadeService) {}


    ngOnInit(): void {
        this.habilidades$ = this.habilidadeService.getHabilidades()
        this.habilidades$.subscribe((skills) => this.habilidades = skills)
    }


}