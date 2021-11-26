import { HttpEvent, HttpEventType } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioService } from "src/app/core/usuario/usuario.service";
import { UsuarioToken } from "src/app/core/usuario/usuarionToken";
import { environment } from "src/environments/environment";
import { arrayHabilidades, UsuarioPerfil } from "./UsuarioPerfil";

@Component({
    templateUrl: './perfilUsuario.component.html',
    styleUrls: ['./perfilUsuario.component.css']
})
export class PerfilUsuarioComponent {

    habilidades: arrayHabilidades[] = [];
    paginaAtual: number = 1;
    userToken: UsuarioToken;
    userPhotoUrl: string | null = null;
    isGestor: boolean = false;
    done = false;
    isSameUser: boolean = false;
    usuario: UsuarioPerfil = {
        habilidades: [],
        id: 0,
        nome: '',
        cargo: '',
        email: '',
        photo_url: ''
    };

    constructor(
        private usuarioService: UsuarioService,
        private router: Router
    ){}


    ngOnInit(): void {
        
        this.getUser()
        this.usuarioService.getUserToken()
            .subscribe(userToken => {
                if(userToken){
                    this.userToken = userToken
                    this.isGestor = userToken.role === 'gestor'
                }
            })
    }

    getUser(){
        let arrayUrl = this.router.url.split('/')
        let id = arrayUrl[arrayUrl.length - 1];
        this.usuarioService.getUsuarioById(id)
            .subscribe(user => {
                this.usuario = user
                this.isSameUser = this.usuario.id == this.userToken.id;
                this.atualizaArray();
                this.userPhotoUrl = environment.API + 'usuarios/photo/' + user.photo_url
            })
    }

    atualizaArray(){
        this.habilidades = this.usuario.habilidades.slice((this.paginaAtual * 6) - 6, this.paginaAtual * 6)
    }

    excluir(idHabilidade: string | number){
        this.usuarioService.desvinculaUsuarioHabilidade(this.usuario.id, idHabilidade)
            .subscribe(() => this.getUser())
    }

    proxima(){
        this.paginaAtual += 1;
        this.atualizaArray();
    }

    anterior(){
        this.paginaAtual -= 1;
        this.atualizaArray();
    }

    uploadPhoto(event: any){
        this.usuarioService.uploadPhoto(event.target.files[0])
            .subscribe((event: HttpEvent<any>) => {
                if(event.type == HttpEventType.Response){
                    this.done = true;
                    this.getUser()
                }

            })
    }
}