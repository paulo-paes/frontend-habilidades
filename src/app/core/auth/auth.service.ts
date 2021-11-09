import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UsuarioLogin } from 'src/app/login/signin/UsuarioLogin';
import { environment } from 'src/environments/environment';
import { UsuarioService } from '../usuario/usuario.service';

const API = environment.API;
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
        private usuarioService: UsuarioService) { }

    authenticate(usuario: UsuarioLogin) {

        return this.http
            .post(
                API + 'usuarios/login',
                usuario,
                { observe: 'response'})
            .pipe(tap(res => {
                const authToken = res.headers.get('Authorization');
                this.usuarioService.setToken(<string>authToken);
            }))
    }


}
