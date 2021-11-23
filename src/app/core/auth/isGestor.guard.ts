import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({ providedIn: 'root' })
export class isGestorGuard implements CanActivate {

    constructor(
        private usuarioService: UsuarioService,
        private router: Router) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let isGestor = false;
        this.usuarioService.getUserToken()
            .subscribe(userToken => {
                if(userToken) isGestor = userToken.role == 'gestor'
            })

        if (this.usuarioService.isLogged() && isGestor) {
            return true;
        }
        this.router.navigate(['home']);
        return false;
    }


}