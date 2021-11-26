import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioService } from "src/app/core/usuario/usuario.service";
import { UsuarioToken } from "src/app/core/usuario/usuarionToken";
import { environment } from "src/environments/environment";

@Component({
    selector: 'cat-menu-lateral',
    templateUrl: './menuLateral.component.html',
    styleUrls: ['./menuLateral.component.css']
})
export class MenuLateralComponent implements OnInit {
    
    userData: UsuarioToken;
    isGestor: Boolean = false;
    userPhotoUrl = '';
    hasPhoto = false;

    constructor(
        private usuarioService: UsuarioService,
        private router: Router
    ){}


    ngOnInit(): void {
        this.usuarioService.getUserToken()
            .subscribe(user => {
                if(user){
                    this.userData = user;
                    this.isGestor = user.role === 'gestor';
                    this.userPhotoUrl = environment.API + 'usuarios/photo/' + this.userData.photo_url;
                    let tamanhoArray = this.userPhotoUrl.split('/').length;
                    this.hasPhoto = this.userPhotoUrl.split('/')[tamanhoArray - 1] != 'null';
                }
            });
    }

    logout(){
        this.usuarioService.logout();
        this.router.navigate(['']);
    }

    redirecionar(){
        this.router.navigate(['home', 'usuario', `${this.userData.id}`])
        this.getPhotoUrl()
    }

    getPhotoUrl(){
        this.usuarioService.getPhotoUrl()
            .subscribe(user => {
                this.userPhotoUrl = environment.API + 'usuarios/photo/' + user.photo_url;
                let tamanhoArray = this.userPhotoUrl.split('/').length
                this.hasPhoto = this.userPhotoUrl.split('/')[tamanhoArray - 1] != 'null'
            })
    }
}