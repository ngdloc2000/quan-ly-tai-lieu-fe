import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {SignUpForm} from "../../../dto/SignUpForm";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  signUp(signUpForm: SignUpForm): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/api/auth/register`, signUpForm);
  }
}
