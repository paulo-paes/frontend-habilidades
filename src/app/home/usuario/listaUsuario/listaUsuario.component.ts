import { Component, Input, OnInit } from "@angular/core";
import { UsuarioService } from "src/app/core/usuario/usuario.service";
import { UsuarioPerfil } from "../perfilUsuario/UsuarioPerfil";


@Component({
    templateUrl: './listaUsuario.component.html',
    styleUrls: ['./listaUsuario.component.css']
})
export class ListaUsuarioComponent implements OnInit{

   usuarios: UsuarioPerfil[];
   usuariosPagina: UsuarioPerfil[];
   paginaAtual: number = 1;

   constructor(
       private usuarioService: UsuarioService
   ) {}


    ngOnInit(): void {
        this.usuarioService.getUsuarios(this.paginaAtual)
            .subscribe(usuarios => {
                this.usuarios = usuarios
                this.atualizaArray();
            })
    }

    getUsuarios(){
        this.usuarioService.getUsuarios(this.paginaAtual)
            .subscribe(usuarios => this.usuarios = usuarios);
    }

    atualizaArray(){
        this.usuariosPagina = this.usuarios.slice((this.paginaAtual * 12) - 12, this.paginaAtual * 12)
    }

    proxima(){
        this.paginaAtual += 1;
        this.atualizaArray();
    }

    anterior(){
        if(this.paginaAtual > 1){
            this.paginaAtual -= 1;
            this.atualizaArray();
        }
        
    }

   
}