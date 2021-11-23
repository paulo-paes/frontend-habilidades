import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/core/usuario/usuario.service';
import { UsuarioToken } from 'src/app/core/usuario/usuarionToken';
import { Habilidade } from './Habilidade';
import { HabilidadeService } from './habilidade.service';

@Component({
    selector: 'cat-habilidade',
    templateUrl: './habilidade.component.html',
    styleUrls: ['./habilidade.component.css']
})
export class HabilidadeComponent implements OnInit {

    habilidades: Habilidade[] = [];
    isGestor: boolean = false;

    constructor(
        private habilidadeService: HabilidadeService,
        private usuarioService: UsuarioService,
        private router: Router
    ) {}


    ngOnInit(): void {
        this.getHabilidades()
        this.usuarioService.getUserToken()
            .subscribe(user => this.isGestor = user.role === 'gestor')
        
    }

    getHabilidades(){
        this.habilidadeService.getHabilidades()
            .subscribe((habilidades) => {
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

    editar(id: number | string){
        this.router.navigate(['home', 'editar-habilidade', id])
    }

    excluir(id: number | string){
        this.habilidadeService.deletaHabilidade(id)
            .subscribe(() => {
                console.log("Habilidade excluida")
                this.getHabilidades()
            })
    }

}