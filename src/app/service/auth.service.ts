import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {SignUpForm} from "../dto/SignUpForm";
import {SignInForm} from "../dto/SignInForm";
import {BaseResponse} from "../dto/BaseResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  signUp(signUpForm: SignUpForm): Observable<any> {
    return this.http.post<any>(`${this.apiServerUrl}/api/auth/register`, signUpForm);
  }

  signIn(signInForm: SignInForm): Observable<BaseResponse> {
    return this.http.post<BaseResponse>(`${this.apiServerUrl}/api/auth/authenticate`, signInForm);
  }
}
