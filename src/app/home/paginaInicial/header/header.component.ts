import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "src/app/core/usuario/usuario.service";

@Component({
    selector: 'cat-header-home',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

    nome: string = '';

    constructor(
        private usuarioService: UsuarioService
    ){}


    ngOnInit(): void {
        this.usuarioService.getUserToken()
            .subscribe(user => {
                if(user){
                    this.nome = user.nome.split(' ')[0];
                }
            })
    }
}