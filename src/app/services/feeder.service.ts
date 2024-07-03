import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeederService {

  // current count of fish fed
  private fishCountSource = new BehaviorSubject<number>(0);

  // increments fish counter by one
  feedCat(): void {
    this.fishCountSource.next(this.fishCountSource.value + 1);
  }

  // returns current number of fish fed
  getFishCount(): Observable<number> {
    return this.fishCountSource;
  }
}
