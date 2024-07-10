import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  // current count of pet fed
  private petSource = new BehaviorSubject<number>(0);

  // increments pet counter by one
  petCat(): void {
    this.petSource.next(this.petSource.value + 1);
  }

  // returns current number of pats
  getPetCount(): Observable<number> {
    return this.petSource;
  }
}
