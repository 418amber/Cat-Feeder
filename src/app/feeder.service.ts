import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeederService {

  // current count of fish fed
  private fishCountSource = new BehaviorSubject<number>(0);
  // allows other components to subscribe to changes in the fish count
  fishCount$ = this.fishCountSource.asObservable();
  
  feedCat(): void {
    this.fishCountSource.next(this.fishCountSource.value + 1);
  }

  constructor() { }
}
