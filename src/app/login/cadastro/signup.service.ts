import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.API
@Injectable({providedIn: 'root'})
export class SignUpService {


    constructor(private http: HttpClient) {}

    verificaEmailCadastrado(email: string){
        return this.http.get(API + `emailcadastrado?email=${email}`)
    }
}