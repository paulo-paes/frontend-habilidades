import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Logs } from "./Logs";


const API = environment.API
@Injectable({providedIn: 'root'})
export class LogsService {

    constructor(
        private http: HttpClient
    ){}

    getLogs(){
        return this.http.get<Logs[]>(API + 'logs')
    }
}