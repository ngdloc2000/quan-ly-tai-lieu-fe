import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseResponse} from "../dto/BaseResponse";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllCongTrinhCount(): Observable<BaseResponse> {
    return this.http.get(`http://localhost:8080/api/cong-trinh/count`);
  }
  getListCongTrinh(type: string): Observable<BaseResponse> {
    return this.http.get(`http://localhost:8080/api/cong-trinh/type?type=${type}`);
  }
  createCongTrinh(congTrinhDto: any) {
    return this.http.post(`http://localhost:8080/api/cong-trinh/create-cong-trinh`, congTrinhDto);
  }
  deleteCongTrinh(maCT: String): any {
    return this.http.post(`http://localhost:8080/api/cong-trinh/delete-cong-trinh`, maCT);
  }
  updateThongTinQuanLyCongTrinh(body: any) {
    return this.http.post(`http://localhost:8080/api/cong-trinh/updateThongTinQuanLyCongTrinh`, body)

  }
  getAllCongTrinh() {
    return this.http.get(`http://localhost:8080/api/cong-trinh/all`)
  }

  getAllThongKeHoSoCongTrinh(option: String): Observable<BaseResponse> {
    return this.http.get<BaseResponse>(`${this.apiServerUrl}/api/documents/thongKe?option=${option}`);
  }

}
