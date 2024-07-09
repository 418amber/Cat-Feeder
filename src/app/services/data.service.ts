import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = `https://api.thecatapi.com/v1/images/search`;
  private apiKey = "live_AwXiWmc66sZdyBHX4W0ngV3t9SVTqEwRz27j1ei5f0PWTtnQm1jqLfnutYVDyrJt";

  constructor(private http: HttpClient) { }

  getFact(): Observable<any> {
    return this.http.get('https://meowfacts.herokuapp.com/').pipe(
      map((data: any) => {
        if(data?.data) {
          return JSON.stringify(data.data, null, 2);
        }
        return '';
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getImages(limit: number = 20): Observable<string[]> {
    const url = `${this.url}?limit=${limit}`;
    return this.http.get<any[]>(url, { headers: { 'x-api-key': this.apiKey } }).pipe(
      map((data: any[]) => {
        return data.map(item => item.url);
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
