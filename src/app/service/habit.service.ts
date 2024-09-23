import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { text } from 'express';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  private apiUrl = 'http://localhost:5000/api/habit';

  constructor(private http: HttpClient) {}

  createHabit(habitData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, habitData,  {responseType:'text'});
  }

  getHabitsByUser(userId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${userId}`);
  }

  deleteHabit(habitId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${habitId}`);
  }
  getHabitById(habitId: string) {
    return this.http.get(`${this.apiUrl}/${habitId}`);
  }

  updateHabit(habitId: string, updatedHabit: any) {
    return this.http.put(`${this.apiUrl}/${habitId}`, updatedHabit);
  }
}
