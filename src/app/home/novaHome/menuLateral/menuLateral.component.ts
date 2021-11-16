import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter, map } from "rxjs/operators";
import { UsuarioService } from "src/app/core/usuario/usuario.service";

@Component({
    selector: 'cat-menu-lateral',
    templateUrl: './menuLateral.component.html',
    styleUrls: ['./menuLateral.component.css']
})
export class MenuLateralComponent implements OnInit {
    
    userData: any;

    constructor(
        private usuarioService: UsuarioService,
        private router: Router
    ){}


    ngOnInit(): void {
        this.usuarioService.getUserToken()
            .subscribe(user => {
                this.userData = user
                console.log(user)
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