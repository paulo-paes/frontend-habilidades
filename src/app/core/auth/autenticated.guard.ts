import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({ providedIn: 'root' })
export class AuthenticatedGuard implements CanActivate {

    constructor(private usuarioService: UsuarioService,
        private router: Router) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        if (this.usuarioService.isLogged()) {
            return true;
        }
        this.router.navigate(['']);
        return false;
    }


}