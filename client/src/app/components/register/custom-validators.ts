import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function passwordMatchValidator(
  control: AbstractControl
): ValidationErrors | null {
  const passwordControl = control.get('password');
  const confirmPasswordControl = control.get('confirmPassword');

  const password = passwordControl?.value;
  const confirmPassword = confirmPasswordControl?.value;

  return password === confirmPassword ? null : { passwordMismatch: true };
}
