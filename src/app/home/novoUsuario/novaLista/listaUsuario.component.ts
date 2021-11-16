import { Component, Input, OnInit } from "@angular/core";
import { UsuarioService } from "src/app/core/usuario/usuario.service";
import { Usuario } from "src/app/usuarios/Usuario";

@Component({
    templateUrl: './listaUsuario.component.html',
    styleUrls: ['./listaUsuario.component.css']
})
export class ListaUsuarioComponent implements OnInit{

   usuarios: Usuario[];

   constructor(
       private usuarioService: UsuarioService
   ) {}


    ngOnInit(): void {
        this.usuarioService.getUsuarios()
            .subscribe(usuarios => {
                this.usuarios = usuarios
                console.log(this.usuarios)
            })
    }

   
}