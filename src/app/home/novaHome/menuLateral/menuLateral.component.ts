import { Component, OnInit } from "@angular/core";
import { UsuarioService } from "src/app/core/usuario/usuario.service";

@Component({
    selector: 'cat-menu-lateral',
    templateUrl: './menuLateral.component.html',
    styleUrls: ['./menuLateral.component.css']
})
export class MenuLateralComponent implements OnInit {
    
    userData: any;

    constructor(
        private usuarioService: UsuarioService
    ){}


    ngOnInit(): void {
        this.usuarioService.getUserToken()
            .subscribe(user => this.userData = user);
        console.log(this.userData)
    }
}