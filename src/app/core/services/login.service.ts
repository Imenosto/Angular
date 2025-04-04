import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post('https://dummyjson.com/auth/login', {
      username,
      password
    });
  }

  getMe(): Observable<any> {
    return this.http.get('https://dummyjson.com/auth/me');
  }

}
