import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioToken } from './usuarionToken';
import jwt_decode from 'jwt-decode';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from 'src/app/usuarios/Usuario';
import { VinculaUsuarioHabilidade } from './vinculaUsuarioHabilidade';
import { UsuarioPerfil } from 'src/app/home/perfilUsuario/UsuarioPerfil';

const API = environment.API;
@Injectable({providedIn: 'root'})
export class UsuarioService {

    private userSubject = new BehaviorSubject<UsuarioToken>(<UsuarioToken><unknown>null);
    private username: string;
    private cargo: string;

    constructor(private httpClient: HttpClient,
        private tokenService: TokenService) {
            this.tokenService.hasToken() && this.decodeAndNotify();
    }

    getUsuarios(){
        return this.httpClient.get<Usuario[]>(API + 'usuarios')
    }
    
    getUsuarioById(id: number | string){
        return this.httpClient.get<UsuarioPerfil>(API + `usuarios/${id}/habilidades`)
    }

    criaUsuario(usuario: Usuario){
        return this.httpClient.post(API + 'usuarios', usuario)
    }

    vinculaUsuarioHabilidade(id: string | number, vinculaHabUser: VinculaUsuarioHabilidade){
        return this.httpClient.post(API + `usuarios/${id}/habilidades`, vinculaHabUser)
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(<UsuarioToken><unknown>null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    isGestor(){
        return this.tokenService.isGestor()
    }

    getUsernameAndCargo() {
        return {username: this.username, cargo: this.cargo};
    }

    getUserToken() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jwt_decode(<string>token) as UsuarioToken;
        this.username = user.nome;
        this.cargo = user.cargo;
        this.userSubject.next(user);
    }


}