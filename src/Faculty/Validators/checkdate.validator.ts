import { AbstractControl, ValidationErrors } from '@angular/forms';

export class checkdate {
  static checkdateValidation(control: AbstractControl): ValidationErrors | null {
    let controlValue = control.value as string;
    let now=new Date();
    let schedule= new Date(controlValue)
    if (schedule<now) {
      return { dateInvalid : true };
    } else {
      return null;
    }
  }
}
