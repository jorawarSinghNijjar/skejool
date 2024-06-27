import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { passwordMatchValidator } from './custom-validators';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from './register.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  success = false;
  errMessage = '';
  companyName!: string;
  email!: string;
  password!: string;
  confirmPassword!: string;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private registerService: RegistrationService
  ) {}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        companyName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      {
        validators: passwordMatchValidator,
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  register() {
    const formValue = this.registerForm.value;

    this.registerService
      .register(
        formValue.companyName,
        formValue.email,
        formValue.password,
        formValue.confirmPassword
      )

      .subscribe({
        next: () => {
          this.success = true;
        },
        error: (err) => {
          if (err.error.code == 11000)
            this.errMessage = 'User already exists!! Try something else.';
          else this.errMessage = 'Something went wrong!!';
        },
      });
    console.log('User Registetred');
    console.log(this.registerForm.value);
  }
}
