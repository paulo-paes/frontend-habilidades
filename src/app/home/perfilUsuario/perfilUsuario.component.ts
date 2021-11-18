import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioService } from "src/app/core/usuario/usuario.service";
import { arrayHabilidades, UsuarioPerfil } from "./UsuarioPerfil";

@Component({
    templateUrl: './perfilUsuario.component.html',
    styleUrls: ['./perfilUsuario.component.css']
})
export class PerfilUsuarioComponent {

    habilidades: arrayHabilidades[] = [];
    paginaAtual: number = 1;

    usuario: UsuarioPerfil = {
        habilidades: [],
        id: 0,
        nome: '',
        cargo: '',
        email: ''
    };

    constructor(
        private usuarioService: UsuarioService,
        private router: Router
    ){}


    ngOnInit(): void {
        let arrayUrl = this.router.url.split('/')
        let id = arrayUrl[arrayUrl.length - 1];
        this.usuarioService.getUsuarioById(id)
            .subscribe(user => {
                this.usuario = user
                this.atualizaArray();
            })
    }

    atualizaArray(){
        this.habilidades = this.usuario.habilidades.slice((this.paginaAtual * 6) - 6, this.paginaAtual * 6)
    }

    proxima(){
        this.paginaAtual += 1;
        this.atualizaArray();
    }

    anterior(){
        this.paginaAtual -= 1;
        this.atualizaArray();
    }
}