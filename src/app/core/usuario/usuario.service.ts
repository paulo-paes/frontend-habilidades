import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioLogin } from 'src/app/login/signin/UsuarioLogin';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario';
import jwt_decode from 'jwt-decode';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';

const API = environment.API;
@Injectable({providedIn: 'root'})
export class UsuarioService {

    private userSubject = new BehaviorSubject<Usuario>(<Usuario><unknown>null);
    private username: string;

    constructor(private httpClient: HttpClient,
        private tokenService: TokenService) {
        //this.tokenService.hasToken() && this.decodeAndNotify();
    }


    getUsuarios(){
        return this.httpClient.get<Usuario[]>(API + 'usuarios')
    }

    criaUsuario(usuario: Usuario){
        return this.httpClient.post(API + 'usuarios', usuario)
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        // this.decodeAndNotify();
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(<Usuario><unknown>null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    // getUsername() {
    //     return this.username;
    // }

    // getUser() {
    //     return this.userSubject.asObservable();
    // }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jwt_decode(<string>token) as Usuario;
        this.username = user.nome;
        this.userSubject.next(user);
    }


}