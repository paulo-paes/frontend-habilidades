import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export const SenhasDiferentesValidator: ValidatorFn = (control: AbstractControl) => {
    const senha = control.get('senha')?.value;
    const confirmarSenha = control.get('confirmarSenha')?.value;
    if(senha !== confirmarSenha){
        const erro: ValidationErrors = {senhasDiferentes: true}
        return erro
    }else{
        return null
    }
    
    
}