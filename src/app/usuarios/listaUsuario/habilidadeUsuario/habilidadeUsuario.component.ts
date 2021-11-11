import { Component, Input } from '@angular/core';
import { Habilidade } from 'src/app/habilidades/habilidade/Habilidade';

@Component({
    selector: 'cat-habilidade-usuario',
    templateUrl: './habilidadeUsuario.component.html',
    styleUrls: ['./habilidadeUsuario.component.css']
})
export class HabilidadeUsuarioComponent {

    @Input() habilidades: string[] | undefined;

    ngOnInit(){
        console.log(this.habilidades)
    }
}