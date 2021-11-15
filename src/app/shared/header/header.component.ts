import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/core/usuario/usuario.service';
import { UsuarioLogin } from 'src/app/login/login/UsuarioLogin';


@Component({
    selector: 'cat-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    user$: Observable<UsuarioLogin>;
    isGestor: boolean;

    constructor(
        private usuarioService: UsuarioService,
        private route: Router){}


    ngOnInit(): void {
        this.isGestor = this.usuarioService.isGestor()
    }


    logout(){
        this.usuarioService.logout();
        this.route.navigate(['']);
    }
}