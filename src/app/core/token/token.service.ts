import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Token } from './token';


const KEY = 'authToken';
@Injectable({providedIn: 'root'})
export class TokenService {
    hasToken() {
        return !!this.getToken();
    }

    setToken(token: string) {
        window.localStorage.setItem(KEY, token);
    }

    getToken() {
        return window.localStorage.getItem(KEY);
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }

    isGestor(){
        const token = jwt_decode(<string>this.getToken()) as Token;
        return token.role === 'gestor' ? true : false
    }
}