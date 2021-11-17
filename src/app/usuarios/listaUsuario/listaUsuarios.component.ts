import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Usuario';
import { UsuarioService } from '../../core/usuario/usuario.service';

@Component({
    selector: 'cat-lista-usuarios',
    templateUrl: './listaUsuarios.component.html',
    styleUrls: ['./listaUsuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

    usuarios: Usuario[] = [];

    constructor(private usuarioService: UsuarioService) {}

    ngOnInit(): void {
        this.usuarioService
            .getUsuarios(1)
            .subscribe((result) => this.usuarios = result)
    }
}