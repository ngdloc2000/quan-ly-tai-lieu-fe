import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseResponse} from "../dto/BaseResponse";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  constructor(private http: HttpClient) { }

  getAllCongTrinhCount(): Observable<BaseResponse> {
    return this.http.get(`http://localhost:8080/api/cong-trinh/count`);
  }
  getListCongTrinh(type: string): Observable<BaseResponse> {
    return this.http.get(`http://localhost:8080/api/cong-trinh/type?type=${type}`);
  }

}
