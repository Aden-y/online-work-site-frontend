import { AbstractControl } from '@angular/forms';

export function forbiddenUsernameValidator(control: AbstractControl): {[key: string]: any} | null {
  const forbiddenUsernames = ['admin', 'username', 'testuser', 'test', 'admin123'];
  for (let i = 0; i < forbiddenUsernames.length; i++) {
    if (forbiddenUsernames[i].toLowerCase() == control.value.toLowerCase()) {
      console.log(control.value);
        return {forbiddenUsername : {value : control.value}};
    }
    return null;
  }
}

export function passwordMismatchValidator(control: AbstractControl) : {[key : string] : boolean} | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
return password && confirmPassword && password.value != confirmPassword.value ? {passwordMisMatch: true} : null;
}
