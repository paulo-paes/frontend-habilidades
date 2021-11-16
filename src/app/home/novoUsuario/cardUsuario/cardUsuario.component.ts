import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "src/app/usuarios/Usuario";

@Component({
    selector: 'cat-card-usuario',
    templateUrl: './cardUsuario.component.html',
    styleUrls: ['./cardUsuario.component.css']
})
export class CardUsuarioComponent {
    @Input() usuario: Usuario;

    constructor(private router: Router) {}

    redirecionar(){
        this.router.navigate(['home', 'usuario', `${this.usuario.id}`])
    }
}