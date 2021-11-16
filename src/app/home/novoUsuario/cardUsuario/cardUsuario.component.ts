import { Component, Input } from "@angular/core";
import { Usuario } from "src/app/usuarios/Usuario";

@Component({
    selector: 'cat-card-usuario',
    templateUrl: './cardUsuario.component.html',
    styleUrls: ['./cardUsuario.component.css']
})
export class CardUsuarioComponent {
    @Input() usuario: Usuario;
}