import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Habilidade } from './Habilidade';


const API = 'http://localhost:4000/'
@Injectable({providedIn: 'root'})
export class HabilidadeService {

    constructor(private httpClient: HttpClient) {}

    getHabilidades(){
        return this.httpClient.get<Habilidade[]>(API + 'habilidades')
    }

    criaHabilidade(novaHabilidade: Habilidade){
        return this.httpClient.post(API + 'habilidades', novaHabilidade)
    }
}