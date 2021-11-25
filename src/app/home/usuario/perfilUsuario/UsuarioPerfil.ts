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
    photo_url: string;
}