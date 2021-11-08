import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Habilidade } from './Habilidade';
import { environment } from 'src/environments/environment';


const API = environment.API;
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