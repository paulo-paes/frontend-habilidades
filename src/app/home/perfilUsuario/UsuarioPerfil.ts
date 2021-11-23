import { Habilidade } from "src/app/habilidades/habilidade/Habilidade";
import { Usuario } from "src/app/usuarios/Usuario";

export interface arrayHabilidades {
    id: number;
    nivel: number;
    nome: string;
    descricao: string;
}


export interface UsuarioPerfil {
    habilidades: arrayHabilidades[];
    id: number | string;
    cargo: string;
    email: string;
    nome: string;
}