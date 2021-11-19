import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

const API = environment.API;

@Injectable({providedIn: 'root'})
export class RecuperarSenhaService {


    constructor(
        private http: HttpClient
    ) {}

    enviaEmail(email: Object){
        return this.http.post(API + 'recuperarsenha', email)
    }

    enviaCodigo(dados: Object){
        return this.http.post(API + 'recuperarsenha/codigo', dados)
    }

    enviaSenha(dados: Object){
        return this.http.post(API + 'recuperarsenha/senha', dados)
    }

}