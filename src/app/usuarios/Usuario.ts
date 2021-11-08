export interface Usuario {
    id: number;
    nome: string;
    cargo: string;
    role: string;
    email: string;
    habilidades?: string[]
}