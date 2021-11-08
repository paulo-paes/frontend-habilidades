import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Usuario';

const API = environment.API;
@Injectable({providedIn: 'root'})
export class UsuarioService {

    constructor(private httpClient: HttpClient) { }


    getUsuarios(){
        return this.httpClient.get<Usuario[]>(API + 'usuarios')
    }

    criaUsuario(usuario: Usuario){
        return this.httpClient.post(API + 'usuarios', usuario)
    }

}