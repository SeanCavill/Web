import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/animal/';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getMemberBoard(): Observable<any> {
    return this.http.get(API_URL + 'member', { responseType: 'text' });
  }

  getBenefactorBoard(): Observable<any> {
    return this.http.get(API_URL + 'benefactor', { responseType: 'text' });
  }
}
