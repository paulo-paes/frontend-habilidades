import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioService } from "src/app/core/usuario/usuario.service";
import { UsuarioToken } from "src/app/core/usuario/usuarionToken";

@Component({
    selector: 'cat-menu-lateral',
    templateUrl: './menuLateral.component.html',
    styleUrls: ['./menuLateral.component.css']
})
export class MenuLateralComponent implements OnInit {
    
    userData: UsuarioToken;
    isGestor: Boolean = false;

    constructor(
        private usuarioService: UsuarioService,
        private router: Router
    ){}


    ngOnInit(): void {
        this.usuarioService.getUserToken()
            .subscribe(user => {
                this.userData = user
                this.isGestor = user.role === 'gestor'
            });
    }

    logout(){
        this.usuarioService.logout();
        this.router.navigate(['']);
    }

    redirecionar(){
        this.router.navigate(['home', 'usuario', `${this.userData.id}`])
    }
}