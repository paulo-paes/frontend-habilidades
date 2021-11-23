import { UsuarioToken } from "src/app/core/usuario/usuarionToken";

export interface Logs {
    id: number;
    id_user: number;
    id_changed: number | null;
    tipo: string;
    tabela: string;
    createdAt: Date;
    updatedAt: Date;
    dataHora: any;
    usuario: UsuarioToken;
}