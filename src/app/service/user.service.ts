import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BaseResponse} from "../dto/BaseResponse";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient,
              private tokenService: TokenService) { }

  getDetailPresent(): Observable<BaseResponse> {
    return this.http.get<BaseResponse>(`${this.apiServerUrl}/api/users/present`)
    // return this.http.get<BaseResponse>(`${this.apiServerUrl}/api/users/present`, this.tokenService.getHttpOptions())
  }
}
