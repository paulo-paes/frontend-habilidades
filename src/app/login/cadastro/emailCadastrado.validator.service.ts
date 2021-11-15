import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';
import { EmailCadastrado } from './emailCadastrado';
import { SignUpService } from './signup.service';

@Injectable({providedIn: 'root'})
export class EmailCadastradoValidatorService {

    constructor(private signUpService: SignUpService) {}

    verificaEmailCadastrado(){

        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(400))
                .pipe(switchMap(email => {
                    return this.signUpService.verificaEmailCadastrado(email)
                }))
                .pipe(map((isTaken: EmailCadastrado | any) => {
                  return isTaken.emailCadastrado ? {emailCadastrado : true} : null
                }))
                .pipe(first());
        }
    }
}