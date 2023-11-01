import { AbstractControl, ValidatorFn } from "@angular/forms";
import { TuiValidationError } from "@taiga-ui/cdk";

export function maxFilesLength(maxLength: number): ValidatorFn {
    return ({ value }: AbstractControl) =>
        value.length > maxLength
            ? {
                maxLength: new TuiValidationError(
                    'Error: maximum limit - 5 files for upload',
                ),
            }
            : null;
}