import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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

  getImage(): Observable<any> {
    return this.http.get('https://api.thecatapi.com/v1/images/search').pipe(
      map((data: any) => {
        if(data[0]?.url) {
          return data[0].url;
        }
        return '';
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    )
  }
}
