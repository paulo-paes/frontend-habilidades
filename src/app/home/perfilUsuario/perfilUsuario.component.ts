import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioService } from "src/app/core/usuario/usuario.service";
import { UsuarioPerfil } from "./UsuarioPerfil";

@Component({
    templateUrl: './perfilUsuario.component.html',
    styleUrls: ['./perfilUsuario.component.css']
})
export class PerfilUsuarioComponent {

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
        console.log(id)
        this.usuarioService.getUsuarioById(id)
            .subscribe(user => {
                this.usuario = user
                console.log(id)
                console.log(this.usuario)
            },
            err => console.log(err))
    }
}