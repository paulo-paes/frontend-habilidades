import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/core/usuario/usuario.service';
import { UsuarioToken } from 'src/app/core/usuario/usuarionToken';
import { VinculaUsuarioHabilidade } from 'src/app/core/usuario/vinculaUsuarioHabilidade';
import { Habilidade } from 'src/app/habilidades/habilidade/Habilidade';
import { HabilidadeService } from 'src/app/habilidades/habilidade/habilidade.service';

@Component({
    selector: 'cat-form-usuario-habilidade',
    templateUrl: './formUsuarioHabilidade.component.html',
    styleUrls: ['./formUsuarioHabilidade.component.css']
})
export class FormUsuarioHabilidadeComponent implements OnInit {

    usuarioHabForm: FormGroup;
    habilidades: Habilidade[];
    user$: Observable<UsuarioToken>;
    user: UsuarioToken;
    erroHabilidade = false;

    constructor(
        private formBuilder: FormBuilder,
        private habilidadeService: HabilidadeService,
        private usuarioService: UsuarioService,
        private router: Router) {}


    ngOnInit(): void {
        this.usuarioHabForm = this.formBuilder.group({
            id_habilidade: ['', Validators.required],
            nivel: [1, 
                [
                    Validators.required,
                    Validators.pattern(/([1-5])/g)
                ]
            ]
        })

        this.user$ = this.usuarioService.getUserToken();
        this.user$.subscribe((user) => this.user = user)

        this.habilidadeService
            .getHabilidades()
            .subscribe((result) => {
                this.habilidades = result
                console.log(result)
            })
    }

    salvar(){

        if(this.usuarioHabForm.valid){
            const objVinculador = this.usuarioHabForm.getRawValue() as VinculaUsuarioHabilidade;
            this.usuarioService.vinculaUsuarioHabilidade(this.user.id, objVinculador)
                .subscribe(
                    () => this.router.navigate(['/home']),
                    () => this.erroHabilidade = true
                )
        }
    }

    cancelar(){
        this.router.navigate(['/home'])
    }


}