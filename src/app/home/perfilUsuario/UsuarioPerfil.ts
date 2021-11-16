import { Habilidade } from "src/app/habilidades/habilidade/Habilidade";
import { Usuario } from "src/app/usuarios/Usuario";

interface arrayHabilidades {
    nivel: number;
    nome: string;
    descricao: string;
}


export interface UsuarioPerfil {
    habilidades?: arrayHabilidades[];
    id: number;
    cargo: string;
    email: string;
    nome: string;
}