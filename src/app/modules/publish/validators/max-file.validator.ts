import { AbstractControl, ValidatorFn } from "@angular/forms";
import { TuiValidationError } from "@taiga-ui/cdk";

export function maxFilesLength(maxLength: number): ValidatorFn {
    return ({ value }: AbstractControl) => value.length > maxLength
    ? {
        maxLength: new TuiValidationError(`Error: El límite máximo de imagenes es de ${maxLength}`),
    } : null;
}