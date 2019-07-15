import { ValidatorFn, AbstractControl } from '@angular/forms';

export class CustomValidators {

    public static requiredFileType(type: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            let hasType = false;
            if (control.value) {
                const inputType = (control.value as string).split('.').pop();
                hasType = inputType.toLowerCase() === type.toLowerCase();
            }
            return hasType ? null : { fileType: true };
        };
    }

}
