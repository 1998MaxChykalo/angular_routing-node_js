import { Validators, FormControl, AbstractControl } from "@angular/forms";

export class PasswordValidator extends Validators {
  static validatePasswordLength(control: AbstractControl) {
    if (control.value && control.value.length > 0) {
      return null;
    } else {
      return { passwordLength: true};
    }
  }
}