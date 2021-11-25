import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioToken } from './usuarionToken';
import jwt_decode from 'jwt-decode';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import { VinculaUsuarioHabilidade } from './vinculaUsuarioHabilidade';
import { UsuarioPerfil } from 'src/app/home/usuario/perfilUsuario/UsuarioPerfil';


const API = environment.API;
@Injectable({providedIn: 'root'})
export class UsuarioService {

    private userSubject = new BehaviorSubject<UsuarioToken>(<UsuarioToken><unknown>null);
    private username: string;
    private cargo: string;
    private userId: number;

    constructor(private httpClient: HttpClient,
        private tokenService: TokenService) {
            this.tokenService.hasToken() && this.decodeAndNotify();
    }

    getUsuarios(page: number){
        return this.httpClient.get<UsuarioPerfil[]>(API + `usuarios`)
    }
    
    getUsuarioById(id: number | string){
        return this.httpClient.get<UsuarioPerfil>(API + `usuarios/${id}/habilidades`)
    }

    criaUsuario(usuario: UsuarioPerfil){
        return this.httpClient.post(API + 'usuarios', usuario)
    }

    vinculaUsuarioHabilidade(id: string | number, vinculaHabUser: VinculaUsuarioHabilidade){
        return this.httpClient.post(API + `usuarios/${id}/habilidades`, vinculaHabUser)
    }

    desvinculaUsuarioHabilidade(id: string | number, idHabilidade: string | number){
        return this.httpClient.delete(API + `usuarios/${id}/habilidades/${idHabilidade}`)
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    logout() {
        this.httpClient.post(API + 'logs/logout', {}).subscribe()
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

    uploadPhoto(file: any){
        const formData = new FormData();
        formData.append('avatar', file)
        return this.httpClient.put(API + 'usuarios', formData, { observe: 'events', reportProgress: true})
    }

    getPhotoUrl(){
        return this.getUsuarioById(this.userId)
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jwt_decode(<string>token) as UsuarioToken;
        this.username = user.nome;
        this.cargo = user.cargo;
        this.userId = user.id;
        this.userSubject.next(user);
    }


}