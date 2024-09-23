import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5000/api/users'; // Adjust this URL as needed

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { username, password });
  }

  register(username: string, email: string, password: string): Observable<any> {
    const body ={ username, email, password };
    return this.http.post(`${this.baseUrl}/register`, body);
  }
}
