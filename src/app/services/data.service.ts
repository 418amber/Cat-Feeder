import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('https://meowfacts.herokuapp.com/').pipe(
      map((data: any) => {
        if(data?.data) {
          return JSON.stringify(data.data, null, 2);
        }
        return '';
      })
    );
  }
}
