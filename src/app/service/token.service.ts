import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

const USER_ID = 'userId';
const TOKEN = 'token';
const FULLNAME = 'fullName';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public getUserId(): number | null {
    // @ts-ignore
    return window.sessionStorage.getItem(USER_ID);
  }

  public setUserId(userId: number) {
    window.sessionStorage.removeItem(USER_ID);
    // @ts-ignore
    window.sessionStorage.setItem(USER_ID, userId);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN);
  }

  public setToken(token: string) {
    window.sessionStorage.removeItem(TOKEN);
    // @ts-ignore
    window.sessionStorage.setItem(TOKEN, token);
  }

  public getFullName(): string | null {
    return window.sessionStorage.getItem(FULLNAME);
  }

  public setFullName(fullName: string) {
    window.sessionStorage.removeItem(FULLNAME);
    // @ts-ignore
    window.sessionStorage.setItem(FULLNAME, fullName);
  }

  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem(TOKEN)}`,
      })
    };
  }
}
