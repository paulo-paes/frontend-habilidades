import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioPerfil } from "../perfilUsuario/UsuarioPerfil";


@Component({
    selector: 'cat-card-usuario',
    templateUrl: './cardUsuario.component.html',
    styleUrls: ['./cardUsuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
    @Input() usuario: UsuarioPerfil;

    constructor(private router: Router) {}

    ngOnInit(): void {
        if(this.usuario.habilidades?.length > 0){
            this.usuario.habilidades = this.usuario.habilidades?.slice(0, 9);
        }
    }

    redirecionar(){
        this.router.navigate(['home', 'usuario', `${this.usuario.id}`])
    }
}