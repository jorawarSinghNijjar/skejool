import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  register(
    companyName: string,
    email: string,
    password: string,
    confirmPassword: string
  ): Observable<any> {
    return this.http.post('http://localhost:', {
      companyName,
      email,
      password,
      confirmPassword,
    });
  }
}
