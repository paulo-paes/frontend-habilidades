import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/core/usuario/usuario.service';
import { UsuarioLogin } from 'src/app/login/signin/UsuarioLogin';

@Component({
    selector: 'cat-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    user$: Observable<UsuarioLogin>;

    constructor(private usuarioService: UsuarioService,
        private route: Router){}


    logout(){
        this.usuarioService.logout();
        this.route.navigate(['']);
    }
}